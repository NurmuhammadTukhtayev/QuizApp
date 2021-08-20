const config=require('./config.json').app
const PORT=config.PORT
const express=require('express')
const app=express()
const cors=require('cors')

//imports
const authRoute=require('./routes/auth')
const quizRoute=require('./routes/quizRoute')
const createRoute=require('./routes/createRoute')
const resultsRoute=require('./routes/user')

//middlewares
app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/quiz', quizRoute)
app.use('/quiz', createRoute)
app.use('/users', resultsRoute)



app.get('/', (req, res)=>{
    res.send("WELCOME!")
})

app.listen(PORT, ()=>{
    console.log(`Server has started at http://localhost:${PORT}`)
})