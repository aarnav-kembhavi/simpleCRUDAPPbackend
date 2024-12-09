const express = require("express");
const router = express.Router();
const Product = require("../models/product.models.js");
const { getProducts } = require("../controllers/product.controller.js");
const { getProduct } = require("../controllers/product.controller.js");
const { createProduct } = require("../controllers/product.controller.js");
const { updateProduct } = require("../controllers/product.controller.js");
const { deleteProduct } = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
