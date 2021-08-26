const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')
const {authMid}=require('../middlewares/authMid')
const bcrypt=require('bcrypt')

//Get categories
router.get('/categories',authMid, async (req, res)=>{
    const result=await dbFunc.query("SELECT * FROM category", [])
    res.send(result)
})

//Get questions
router.get('/categories/:id', authMid,async (req, res)=>{
    const id=req.params.id
    const result=await dbFunc.query("SELECT * FROM questions WHERE category_id=?", [id])
    res.send(result)
})

//Get variants
router.get('/categories/:id/:varId',authMid, async (req, res)=>{
    const id=req.params.varId
    let data=await dbFunc.query("SELECT * FROM variants WHERE question_id=?", [id])
    // data=data[0]
    let arr=[], d
    for(let i=0;i<data.length;++i){
        d=data[i]
        arr.push(d.variant)
    }

    // res.send(data.variant)
    res.send(arr)
})

//Start test
router.get('/:id/start/:tests',authMid, async (req, res)=>{
    const catId=req.params.id
    const limit=req.params.tests*1
    let questions=[], variants=[]
    for(let i=0;i<limit;++i){
        const random=Math.floor(Math.random()*(3-1)+1)
        const result=await dbFunc.query("SELECT * FROM questions WHERE category_id=? AND id=?", [catId, random])
        const variant=await dbFunc.query("SELECT * FROM variants WHERE question_id=?", [result[0].id])
        variants.push(variant)
        questions.push(result[0].question)
    }

    const arr=[questions, variants]
    res.send(arr)
})

//Calculate results
router.post('/:id/start/:tests', authMid,async (req, res)=>{
    const limit=req.params.tests*1
    let ball=0
    for(let i=0;i<limit;i++){
        let data=req.body[i]

        //    find question from database
        const find=await dbFunc.query("SELECT * FROM questions WHERE id=?",[data.id])

//compare answer
        const r=await bcrypt.compare(data.answer,find[0].correct_ans)

        //    if find bal++
        if(r) ball++
    }

    const percent=ball/limit*100
    let time = new Date().toLocaleString()
    let result=await dbFunc.query("INSERT INTO results (username, ball, percent, correct_answers, incorrect_answers,submission_date) VALUES (?,?,?,?,?,?)",[req.params.username, ball, percent,ball, limit-ball, time])
    ball=JSON.stringify(ball)
    res.send("Your result is "+ball+" out of "+limit+"\n"+percent+"%")
})

module.exports=router