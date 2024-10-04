const express = require('express');
const cors = require('cors');
const products = require('./products.json'); // Ensure the path to JSON is correct

const app = express();
app.use(cors()); // Enable CORS

// Route for all products
app.get('/api/products', (req, res) => {
    console.log(products);
  res.json(products);
});

// Route for a specific product by ID
app.get('/api/products/:id', (req, res) => {
    console.log(products);
  const product = products.find(p => p._id === req.params.id);
  if (!product) {
    
    return res.status(404).send('Product not found');
  }
  res.json(product);
});

const port = process.env.PORT || 4999;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
