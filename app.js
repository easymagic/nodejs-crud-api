const express = require('express');

const app = express();

const mongoose = require('mongoose');
// const cors = require('cors');

// const env = require('env');

require('dotenv').config();

const pool = require('./db');


app.get('/pg-init',async (req,res)=>{
    try {
        const newTodo = await pool.query("insert into todo (description) values ($1) returning *",['test-description...']);
        res.json({
            newRec:newTodo
        });
    } catch (error) {
        res.json({
            error
        });
    }
});



// console.log(env().MONGO_CONNECTION_STRING);

const Router = require('./routes/article');

app.use(express.json());

app.use('/articles',Router);



// app.get('/',dataLiseMiddleware,(req,resp)=>{
  
//     // resp.send('We are on home...');
//     //resp.json({name:'cool',params:req.query.name});
//     resp.data({name:'cool',params:req.query.name});

// });

//process.env.MONGO_CONNECTION_STRING
// console.log(process.env.MONGO_CONNECTION_STRING);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,()=>{
    console.log('Connected To Db...');
});


app.listen(3000,()=>{
  console.log('Server started....');
});