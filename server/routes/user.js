const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')
const {authMid}=require('../middlewares/authMid')

router.get('/top', authMid, async (req, res)=>{
    const result=await dbFunc.query("SELECT * FROM results WHERE percent<=100 AND percent>80 LIMIT 5", [])
    res.send(result)
})

module.exports=router