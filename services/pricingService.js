const pricingModel = require('../models/pricingModel');

/**
 * Calculates the delivery cost based on the zone, organization ID, and total distance.
 * @param {string} zone - The delivery zone.
 * @param {string} organizationId - The ID of the organization requesting the delivery.
 * @param {number} totalDistance - The total distance for the delivery in kilometers.
 * @returns {Promise<number>} The total cost of the delivery.
 * @throws Will throw an error if pricing information cannot be found or if an error
 * occurs during calculation.
 */
async function calculateDeliveryCost(zone, organizationId, totalDistance) {
  try {
    const pricing = await pricingModel.getPricingByZoneAndOrg(zone, organizationId);
    if (!pricing) {
      throw new Error('Pricing information not found');
    }
    let totalCost = 0;
    if (totalDistance <= pricing.base_distance_in_km) {
      totalCost = pricing.fix_price;
    } else {
      const additionalDistance = totalDistance - pricing.base_distance_in_km;
      const additionalCost = additionalDistance * pricing.km_price;
      totalCost = +pricing.fix_price + additionalCost;
    }
    return totalCost;
  } catch (error) {
    console.error('Error in calculateDeliveryCost:', error);
    throw error;
  }
}

module.exports = { calculateDeliveryCost };
