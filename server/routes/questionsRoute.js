const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')

router.post('/addQuestions', async (req, res)=>{
    let time=new Date().toLocaleString()
    const data=await dbFunc.query("SELECT id FROM category WHERE category=?;", [req.body.category])
    const id=JSON.stringify(data[0].id)
    // const correct_ans=
    const result=await dbFunc.query("INSERT INTO questions (category_id, question, correct_ans, save_time) VALUES (?, ?, ?,?);", [id, req.body.question, req.body.correct_ans,time ])
    const questionId=JSON.stringify(result.insertId)

    const add=await dbFunc.query("INSERT INTO variants (A,B,C,D,E,correct_ans,set_time, question_id) VALUES (?,?,?,?,?,?,?,?)",[req.body.A, req.body.B, req.body.C, req.body.D, req.body.E, req.body.correct_ans, time, questionId])
    res.send(add)

})

router.get('/questions', async (req, res)=>{
    const data=await dbFunc.query("SELECT * FROM questions;", [])
    res.send(data)
})


module.exports=router