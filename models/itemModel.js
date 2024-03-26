const db = require('../db');

async function getItemById(id) {
  const result = await db.query('SELECT * FROM items WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = {
  getItemById,
};
