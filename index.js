const express = require('express');
const router = require('./routes');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;
require('dotenv').config();


app.get('/',(req,res) => {
    res.end('hii i am alive');
});
connectDB();
app.use('/api',router);
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});