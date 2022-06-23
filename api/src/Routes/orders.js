const router = require('express').Router();
const { createOrder, getOrders, getOrdersByUser } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:email", getOrdersByUser);

module.exports = router;