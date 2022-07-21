const router = require('express').Router();
const { getUsers, signUp, login, changeVerification, deleteUser, countVerified } = require('../Controllers/userController');

router.get("/", getUsers);

router.post("/signup", signUp)

router.post("/login", login)

router.put("/verification", changeVerification)

router.delete("/:email", deleteUser)

router.get("/count", countVerified)

module.exports = router;