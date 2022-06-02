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
        console.log('User found: ',user)
        if(!user) {
            res.status(204).send()
        } else if(user.password === password) {
            res.status(200).json(user)
        } else {
            res.status(200).send({ wrongPass: 'Wrong password' });
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;