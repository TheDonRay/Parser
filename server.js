// initialize the installation of expressJS & package.json
const express = require('express'); 
const app = express(); 

// Call routes below 
const routeForParsing = require('./routes/parseroute.js'); 

//initialize the env stuff here as such 
require('dotenv').config(); 

//set up basic middleware for incoming data 
app.use(express.json());  

//initialize PORT imported from env already since its in the same server module 
const PORT = process.env.PORT;  

//basic route to make sure server  
app.get('/', (req, res) => {
    res.send('Welcome To Parser -> a basic backend API used to parse a file for a specific Key word youre searching for !'); 
});  

// mounting the router which has final url client can visit to see data
app.use('/api/v1/', routeForParsing); 

//start the server as such 
app.listen(PORT, (req, res) => { 
    console.log(`Backend Successfully running at Port http://localhost:${PORT}`); 
}); 
