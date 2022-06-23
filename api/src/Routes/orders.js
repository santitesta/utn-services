const router = require('express').Router();
const { createOrder, getOrders, getOrdersByUser, addCommentary, changeState } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:email", getOrdersByUser);

router.put("/commentary", addCommentary);

router.put("/state", changeState);

module.exports = router;