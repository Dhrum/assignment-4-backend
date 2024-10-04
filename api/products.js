// api/products.js

// Import your products data
const products = require('../data/products.json');

export default (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  // Handle OPTIONS method (for CORS preflight request)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Respond to the preflight request
  }

  // Return the products data
  res.status(200).json(products);
};
