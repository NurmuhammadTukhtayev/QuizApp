const jwt=require('jsonwebtoken')
const config=require('../config.json').app

const authMid = (req, res, next) => {
    const token=req.header('x-auth-token')
    if(!token)
        return res.status(401).send('First log in!')

    try {
        req.user=jwt.verify(token, config.key)
        next()
    }catch (err){
        return res.status(400).send("First log in")
    }
}

const authRole = (req, res, next) => {
    const token=req.header('x-auth-token')
    if(!token)
        return res.status(401).send('First log in!')

    try {
        req.user=jwt.verify(token, config.key)
        if(req.user.role==="admin")
            next()
        else return res.send("You are not allowed")
    }catch (err){
        return res.status(400).send("First log in")
    }
}


module.exports={
    authMid, authRole
}