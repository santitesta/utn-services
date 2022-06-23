const router = require('express').Router();
const { createOrder, getOrders, getOrdersByUser, addCommentary } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:email", getOrdersByUser);

router.put("/", addCommentary);

module.exports = router;