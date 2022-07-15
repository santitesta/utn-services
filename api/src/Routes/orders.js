const router = require('express').Router();
const { createOrder, getOrders, getOrdersByUser, getOrdersByPermission, getOrdersByInstitute, addCommentary, changeState, changeRefrigeration } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:email", getOrdersByUser);

router.get("/:instituto/:departamento/:servicio", getOrdersByPermission);

router.get("/institute/:ins", getOrdersByInstitute);

router.put("/commentary", addCommentary);

router.put("/state", changeState);

router.put("/refrigeration", changeRefrigeration);

module.exports = router;