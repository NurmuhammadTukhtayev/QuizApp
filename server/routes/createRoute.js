const express=require('express')
const router=express.Router()
const dbFunc=require('../database/dbFunc')
const bcrypt=require('bcrypt')
const {authRole, authMid}=require('../middlewares/authMid')

//create category
router.post('/createCategory', authRole, async (req, res)=>{
    const category=req.body.category
    let time = new Date().toLocaleString();
    const result=await dbFunc.query("INSERT INTO category (category, create_time) VALUES (?, ?)", [category, time])
    res.send(result)
})

//update category
router.put('/categories/:id', authRole,async (req, res)=>{
    const cat_id=req.params.id
    const result=dbFunc.query("UPDATE category SET category = ? WHERE (id = ?);", [req.body.category, cat_id])
    res.send(result)
})

//delete category
router.delete('/categories/:id', authRole, async (req, res)=>{
    const cat_id=req.params.id
    const data=await dbFunc.query("DELETE FROM category WHERE id=?", [cat_id])
    const result=await dbFunc.query("DELETE FROM questions WHERE category_id=?", [cat_id])
    const variants=await dbFunc.query("DELETE FROM variants WHERE category_id=?", [cat_id])
    res.send(variants)
})



//add questions
router.post('/addQuestions', authRole,async (req, res)=>{
    let time=new Date().toLocaleString()
    const data=await dbFunc.query("SELECT * FROM category WHERE category=?;", [req.body.category])
    const id=JSON.stringify(data[0].id)
    const count=data[0].count+1
    const answer=await bcrypt.hash(req.body.correct_ans, 12)


    const result=await dbFunc.query("INSERT INTO questions (category_id, question, correct_ans, save_time) VALUES (?, ?, ?,?);", [id, req.body.question, answer,time ])
    const questionId=JSON.stringify(result.insertId)


    const catRes=await dbFunc.query("UPDATE category SET count = ? WHERE (id = ?);",[count, id])

    let variants=req.body.variants
    let add
    for(let i=0;i<variants.length;++i){
        const A=JSON.stringify(variants[i].variant)
        add=await dbFunc.query("INSERT INTO variants (variant, set_time, question_id, category_id) VALUES (?,?,?,?)",[A,  time, questionId, id])
    }

    res.send(add)
})

//update question
router.put('/categories/:id/:qId', authMid,async (req, res)=>{
    const id=req.params.qId
    const result=await dbFunc.query("UPDATE questions SET question=? WHERE id=?", [req.body.question, id])
    res.send(result)
})

//delete question
router.delete('/categories/:id/:qId', authMid,async (req, res)=>{
    const id=req.params.qId
    const result=await dbFunc.query("DELETE FROM questions WHERE id=?", [id])
    const data=await dbFunc.query("DELETE FROM variants WHERE question_id=?", [id])
    res.send(data)
})



//update variants
router.put('/categories/:id/:qId/:varId',authRole, async (req, res)=>{
    const id=req.params.varId
    const data=await dbFunc.query("UPDATE variants SET variant=? WHERE id=?", [req.body.variant, id])
    res.send(data)
})


//delete variants
router.delete('/categories/:id/:qId', authRole, async (req, res)=>{
    const id=req.params.qId
    const data=dbFunc.query("DELETE FROM variants WHERE question_id=?;", [id])
    res.send(data)
})

module.exports=router