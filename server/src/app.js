import express from 'express'
import cors from 'cors'



const app = express()


app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes



export default app