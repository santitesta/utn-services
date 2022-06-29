const router = require('express').Router();
const { getUsers, signUp, login, changePermission, changeVerification, deleteUser } = require('../Controllers/userController');

router.get("/", getUsers);

router.post("/signup", signUp)

router.post("/login", login)

router.put("/permission", changePermission)

router.put("/verification", changeVerification)

router.delete("/:email", deleteUser)

module.exports = router;