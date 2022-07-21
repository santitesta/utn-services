const router = require('express').Router();
const { createOrder, getOrders, getOrdersByUser, getOrdersByPermission, getOrdersByInstitute, addCommentary, changeState, changeRefrigeration, countPendingOrders } = require('../Controllers/ordersController');

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/byuser/:email", getOrdersByUser);

router.get("/bypermission/:instituto/:departamento/:servicio", getOrdersByPermission);

router.get("/byinstitute/:ins", getOrdersByInstitute);

router.put("/commentary", addCommentary);

router.put("/state", changeState);

router.put("/refrigeration", changeRefrigeration);

router.get("/count", countPendingOrders);

module.exports = router;