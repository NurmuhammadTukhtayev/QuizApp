const express=require('express')
const bcrypt=require('bcrypt')
const dbFunc=require('../database/dbFunc')
const Joi=require('joi')
const router=express.Router()

router.post('/register', async (req, res)=>{
    // console.log(req.body)
    const schema=Joi.object({
        username:Joi.string().required().min(4).max(20),
        email:Joi.string().required().min(10),
        password:Joi.string().required()
    })
    const result=schema.validate(req.body)

    if(result.error){
        res.send(result.error.details[0].message)
    }else{
        let time = new Date().toLocaleString();
        // INSERT into quizbase.users (username, email, password, register_date) VALUES ("Nurmuhammad", "toxtayevn@mail.ru", "12345", "14.08.2021")
        const password=await bcrypt.hash(req.body.password, 12)


        let data=await dbFunc.query("INSERT into users (username, email, password, register_date) VALUES (?,?,?,?)", [req.body.username, req.body.email, password, time])
        res.send(data)
    }
})

module.exports=router