const { Schema, model } = require("mongoose");
const validator = require("validator");

const detailsSchema = new Schema({
  description: {
    type: String,
    minlength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    required: true,
    validate: function (value) {
      return value.length >= 3 ? true : false;
    },
  },
  phone: {
    type: String,
    required: true,
    validate: function (value) {
      return validator.isMobilePhone(value, "he-IL");
    },
  },
  dataAdded: {
    type: Date,
    default: () => Date.now(),
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: detailsSchema,
});

const Product = model("products", productSchema);

module.exports = Product;

// {
//   name: "T-Shirt",
//   category: "Shirt",
//   isActive: true,
//   details: {
//     description: "snameproducts nameproducts nameproducts nameproducts",
//     price: 100,
//     discount: 20,
//     images: ["img1", "img2", "img3"],
//     phone: "+972542085662",
//   },
