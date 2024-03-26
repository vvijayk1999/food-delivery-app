const { calculateDeliveryCost } = require('../services/pricingService');
const pricingModel = require('../models/pricingModel');

// Mock the pricingModel to prevent actual DB calls during testing.
jest.mock('../models/pricingModel');

describe('calculateDeliveryCost', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calculates cost correctly when total distance is exactly the base distance', async () => {
    const mockPricingData = { base_distance_in_km: 5, km_price: 1.5, fix_price: 10 };
    pricingModel.getPricingByZoneAndOrg.mockResolvedValue(mockPricingData);

    const totalCost = await calculateDeliveryCost('central', '005', 5, 'perishable');
    expect(totalCost).toBe(10); // Cost should be exactly the fixed price
  });

  it('calculates cost correctly when total distance is less than the base distance', async () => {
    const mockPricingData = { base_distance_in_km: 5, km_price: 1.5, fix_price: 10 };
    pricingModel.getPricingByZoneAndOrg.mockResolvedValue(mockPricingData);

    const totalCost = await calculateDeliveryCost('central', '005', 3, 'perishable');
    expect(totalCost).toBe(10); // Cost should still be the fixed price
  });

  it('calculates cost correctly with a large total distance', async () => {
    const mockPricingData = { base_distance_in_km: 5, km_price: 2, fix_price: 15 };
    pricingModel.getPricingByZoneAndOrg.mockResolvedValue(mockPricingData);

    const totalCost = await calculateDeliveryCost('central', '005', 20, 'perishable');
    expect(totalCost).toBe(45); // 15 + (15 * 2)
  });

  // Simulate no pricing found
  it('handles missing pricing information gracefully', async () => {
    pricingModel.getPricingByZoneAndOrg.mockResolvedValue(null);

    await expect(calculateDeliveryCost('central', '005', 10, 'perishable'))
      .rejects
      .toThrow('Pricing information not found');
  });

  it('calculates cost correctly for non-perishable items with different pricing', async () => {
    const mockPricingData = { base_distance_in_km: 5, km_price: 1, fix_price: 8 };
    pricingModel.getPricingByZoneAndOrg.mockResolvedValue(mockPricingData);

    const totalCost = await calculateDeliveryCost('central', '005', 8, 'non-perishable');
    expect(totalCost).toBe(11); // 8 + (3 * 1)
  });
});
