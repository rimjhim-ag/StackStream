import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"


import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();


dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use(cors());

app.get('/', (req, res)=> {
    res.send("Hi! backend working");
})

app.use('/user' , userRoutes)
app.use('/questions' , questionRoutes)
app.use('/answer', answerRoutes)










const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> {console.log(`server running on port ${PORT} `)} ))
.catch((err)=> console.log(err.message))




