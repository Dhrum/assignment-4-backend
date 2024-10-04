// api/products.js

// Import the JSON data
const products = require('../data/products.json');

module.exports = (req, res) => {
  // Return all products as a JSON response
  res.status(200).json(products);
};
