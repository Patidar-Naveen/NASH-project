import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.end("running")
})

app.get("/home",(req,res)=>{
    res.end("home running")
})


app.listen(process.env.PORT,()=>{
    console.log("Port is running on"+ process.env.PORT )
})
