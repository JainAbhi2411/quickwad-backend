const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: { type: String, required: true, unique: true },
  product_name: { type: String, required: true },
  category: { type: String, required: true },
  image_url: String,
  description: String,
  price: { type: Number, required: true },
  stock_quantity: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);