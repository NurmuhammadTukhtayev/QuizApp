const config=require('./config.json').app
const PORT=config.PORT
const express=require('express')
const app=express()
const cors=require('cors')

//imports
const authRoute=require('./routes/auth')
const categoryRoute=require('./routes/categoryRoute')
const questionsRoute=require('./routes/questionsRoute')
const variantsRoute=require('./routes/variantsRoute')

//middlewares
app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/quiz', categoryRoute)
app.use('/quiz/', questionsRoute)
app.use('/quiz/', variantsRoute)




app.get('/', (req, res)=>{
    res.send("WELCOME!")
})

app.listen(PORT, ()=>{
    console.log(`Server has started at http://localhost:${PORT}`)
})