const  express=require('express');
const app=express();
const mysql2 =require('mysql2');
const db=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    databases:'cent'
})
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connection successfull");
    }
})
const userrouter=require('./router/userrouter');
app.use('/list',userrouter);
 app.listen(1000,(req,res)=>{
    console.log('app running in 1000 port');
 });



