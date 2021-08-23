const express=require('express')
const bcrypt=require('bcrypt')
const dbFunc=require('../database/dbFunc')
const Joi=require('joi')
const router=express.Router()
const jwt=require('jsonwebtoken')
const config=require('../config.json').app

router.post('/register', async (req, res)=>{
    //validate schema
    const schema=Joi.object({
        username:Joi.string().required().min(4).max(20),
        email:Joi.string().required().min(10),
        password:Joi.string().required()
    })
    const result=schema.validate(req.body)

    //register
    if(result.error){
        res.send(result.error.details[0].message)
    }else{
        let time = new Date().toLocaleString();
        const password=await bcrypt.hash(req.body.password, 12)


        let data=await dbFunc.query("INSERT into users (username, email, password, register_date) VALUES (?,?,?,?)", [req.body.username, req.body.email, password, time])
        res.send(data)
    }
})

router.post('/login', async (req, res)=>{
    const username=req.body.username || req.body.email
    let result=await dbFunc.query("SELECT * FROM users WHERE username=? OR email=?",[username, username])

    if(result.length===0){
        return res.json({error: 'username or password invalid'})
    }
    const password=result[0].password

    const isMatch=await bcrypt.compare(req.body.password, password)

    if(isMatch){
        let role="user"
        if(result[0].permission){
            role="admin"
        }
        const token=jwt.sign({name:username, role:role}, config.key)
        res.header('x-auth-token', token)
        res.send(token)
    }else{
        res.json({error: 'username or password invalid!'})
    }
})

module.exports=router