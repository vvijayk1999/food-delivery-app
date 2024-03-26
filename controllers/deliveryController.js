// Joi for request validation
const Joi = require('joi');
const pricingService = require('../services/pricingService');

// Defining the schema for request data validation using Joi.
// This ensures the request contains the necessary fields in the correct format.
const deliveryCostSchema = Joi.object({
  zone: Joi.string().required(),
  organizationId: Joi.string().required(),
  totalDistance: Joi.number().min(0).required(),
  itemType: Joi.string().valid('perishable', 'non-perishable').required(),
});

exports.calculateDeliveryCost = async (req, res) => {
  // Converts request parameters from snake_case to camelCase to fit Airbnb 's coding style guide.
  const requestBody = {
    zone: req.body.zone,
    organizationId: req.body.organization_id,
    totalDistance: req.body.total_distance,
    itemType: req.body.item_type,
  };

  const validation = deliveryCostSchema.validate(requestBody);
  if (validation.error) {
    return res.status(400).json({ error: validation.error.details[0].message });
  }

  const {
    zone, organizationId, totalDistance, itemType,
  } = validation.value;

  try {
    const totalCost = await pricingService.calculateDeliveryCost(
      zone,
      organizationId,
      totalDistance,
      itemType,
    );
    res.json({ total_price: totalCost });
  } catch (serviceError) {
    res.status(500).json({ error: serviceError.message });
  }
  return null;
};
