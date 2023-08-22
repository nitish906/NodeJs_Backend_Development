
const express=require('express');
const port=8000;

const app=express();

app.get('/', function(req, res){
    res.send("Coll is is running")
});



app.listen(port,function(err){
    if(err){
        console.log("Error is Running in you app")
    }
    console.log("Yp! you App in running on port", port);
});



