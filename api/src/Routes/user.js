const router = require('express').Router();
const { getUsers, signUp, login, changePermission } = require('../Controllers/userController');

router.get("/", getUsers);

router.post("/signup", signUp)

router.post("/login", login)

router.put("/permission", changePermission)

module.exports = router;