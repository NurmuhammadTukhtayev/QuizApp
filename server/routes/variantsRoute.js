const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const dbFunc=require('../database/dbFunc')

router.post('/variants', async (req, res)=>{
    let time=new Date().toLocaleString()
    const hashCode=bcrypt.hash(req.body.corr_ans)
    const result=await dbFunc.query("INSERT INTO variants (options, question_id, set_time, hash_code) VALUES (?,?,?,?)", [req.body.options, req.body.qu_id, time, hashCode])
    res.send(result)

})

module.exports=router