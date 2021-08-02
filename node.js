const express=require('express')
const app=express()
const request=require('request')

app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/result',(req,res)=>{
    console.log(req.query)
    
    const url=`http://www.omdbapi.com/?i=tt3896198&apikey=4398e51&s=${req.query.MovieName}`;
    request(url,(error,response,body)=>{
        if(!error&&response.statusCode===200){
            const data=JSON.parse(body);
            res.render("result",{movies:data});
        }
        else{
            res.send("OOPS, Something went wrong");
        }
    })
})
app.get('*',(req,res)=>{
    res.send('404 NOT FOUND')
})
app.listen(3000,()=>{
    console.log("MovieMafia")
})



