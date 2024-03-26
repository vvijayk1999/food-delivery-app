const db = require('../db');

async function getPricingByZoneAndOrg(zone, organizationId) {
  try {
    const result = await db.query('SELECT * FROM pricings WHERE zone = $1 AND organization_id = $2', [zone, organizationId]);
    return result.rows[0];
  } catch (error) {
    console.error('Database error in getPricingByZoneAndOrg:', error);
    throw new Error('Failed to fetch pricing details');
  }
}

module.exports = {
  getPricingByZoneAndOrg,
};
