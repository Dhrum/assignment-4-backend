// api/products/[id].js

// Import the JSON data
const products = require('../../data/products.json');

module.exports = (req, res) => {
  // Extract the ID from the URL by splitting the URL and getting the last part
  const id = req.url.split('/').pop();  // Extract the last part of the URL

  // Log the full request URL and extracted ID for debugging
  console.log('Full Request URL:', req.url);
  console.log('Extracted ID:', id);

  // Check if id is passed correctly
  if (!id) {
    return res.status(400).json({ error: 'ID not passed correctly' });
  }

  // Find the product by _id in the products.json file
  const product = products.find(p => p._id === id);

  // If product not found, return 404
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Return the product if found
  res.status(200).json(product);
};
