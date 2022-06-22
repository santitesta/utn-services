const router = require('express').Router();
const { createOrder, getOrders } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

module.exports = router;