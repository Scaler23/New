const express = require("express");
const axios = require("axios");
const authController = require("../controllers/authController");
const orderController = require("../controllers/orderController");
const inventoryController = require("../controllers/inventoryController");
const router = express.Router();
// Define routes
router.get("/", (req, res) => {
  res.send("Hello, this is the dashboard");
});

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/orders", orderController.checkOrders);
router.get("/order/{id}", orderController.checkOrder);
router.post("/order/store", orderController.addOrder);
router.get("/inventory", inventoryController.supplies);

module.exports = router;
