// this route is for the actual parsing of files from what is uploaded. 
const express = require('express'); 
const parserRoute = express.Router();  
// in this route need to set up multer  

// set up the route as such for parsing. 
parserRoute.post('/parsefile', (req, res) => { 
    res.send({ 
        RouteForParsing: true
    }); 
}); 

module.exports = parserRoute; 