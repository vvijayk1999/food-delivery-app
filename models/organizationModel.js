const db = require('../db');

async function getAllOrganizations() {
  const result = await db.query('SELECT * FROM organizations');
  return result.rows;
}

module.exports = {
  getAllOrganizations,
};
