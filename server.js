// initialize the installation of expressJS & package.json
const express = require('express'); 
const app = express(); 

//initialize the env stuff here as such 
require('dotenv').config(); 

//set up basic middleware for incoming data 
app.use(express.json());  

//initialize PORT imported from env already since its in the same server module 
const PORT = process.env.PORT;  

//basic route to make sure server  
app.get('/home', (req, res) => {
    res.send('Welcome To Parser -> a basic backend API used to parse a file for a specific Key word youre searching for!'); 
}); 

//start the server as such 
app.listen(PORT, (req, res) => { 
    console.log(`Backend Successfully running at Port http://localhost:${PORT}`); 
}); 
