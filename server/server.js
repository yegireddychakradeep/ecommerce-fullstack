 const dbConnect = require("./mongodb");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
app.get('/',(req,res)=>
{
    res.json({
        msg:"message sent "
    })
})
app.listen(PORT,()=>
{
    console.log("listening");
})

//connecting to database
dbConnect();
