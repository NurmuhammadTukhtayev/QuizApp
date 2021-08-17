const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')

router.post('/categories', async (req, res)=>{
    const category=req.body.category
    let time = new Date().toLocaleString();
    const result=await dbFunc.query("INSERT INTO category (category, create_time) VALUES (?, ?)", [category, time])
    res.send(result)
})

router.get('/categories', async (req, res)=>{
    const result=await dbFunc.query("SELECT * FROM category", [])
    res.send(result)
})

module.exports=router