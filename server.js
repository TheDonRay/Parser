// initialize the installation of expressJS & package.json
const express = require('express'); 
const app = express(); 

//initialize the env stuff here as such 
require('dotenv').config(); 

//set up basic middleware for incoming data 
app.use(express.json());  

