const express=require("express")
const cors =require('cors');


const app=express();
app.use(express.json());
app.use(cors())
const port=8000;

const movies=require("./db.json");

app.get('/movie',(req,res)=>{
    res.json(movies)
    console.log("movies",movies)
})

app.get('/',(req,res)=>{
    res.json("Server is Running")
})

app.listen(port,()=>{
    console.log(`server is listening at port :${port}`)
})

