// register dotenv file first 
require('dotenv').config();
// create express instant 
const express = require('express');
const userRouter = require('./Router/userRouter');

// create app
const app = express();
app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));

// provide here path which will use for assets
// app.use(express.static(''))



app.get('/', (req, res) => res.send('WELCOME TO THE BOILER OF EXPRESS API'));
app.use('/users', userRouter);


app.use((req, res) => {
    res.statusCode= 400;
    res.statusMessage = "Resource Not Found.";
    res.send({
        message: "Resource Not Found.",
        statusCode: 400
    });
});
