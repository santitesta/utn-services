const router = require('express').Router();
const { Users} = require('../db');

router.post("/signup", async(req,res)=>{
    const { email, password } = req.body;
    try {
        const [user, created] = await Users.findOrCreate({
            where: {email },
            defaults: {email, password }
        })
        if(created) res.json(user)
        else res.send('Email already in use')
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/login", async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({
            where: {email: email}
        })
        if(user.password === password) res.send(user)
        else res.send({});
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;