// register dotenv file first 
require('dotenv').config();
// create express instant 
const express = require('express');

// create app
const app = express();

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));