import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js'


const app= express();
//add posts prefix to all routes in posts.js, so it runs through http://localhost:5000/posts

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true})); 
app.use(cors());
app.use('/posts', postRoutes); 

const CONNECTION_URL='mongodb+srv://mprj:aaaa_aaaa@cluster0.3oosy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})).catch((error)=>console.log(error.message));

