const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')
const {authMid, authRole}=require('../middlewares/authMid')

router.get('/top', authMid, async (req, res)=>{
    const result=await dbFunc.query("SELECT * FROM results ORDER BY percent LIMIT 5", [])
    res.send(result)
})

router.get('/', authMid, async (req, res)=>{
    res.json(req.user)
})

router.get('/all', authRole, async (req, res)=>{
    const result=await dbFunc.query("SELECT * FROM users ORDER BY username", [])
    console.log(req.ip)
    res.send(result)
})

module.exports=router