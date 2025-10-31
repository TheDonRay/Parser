// this route is for the actual parsing of files from what is uploaded. 
const express = require('express'); 
const parserRoute = express.Router();  
// in this route need to set up multer   
const multer = require('multer');  
const path = require('path');  
const fs = require('fs');  

// set destination of where files will be uploaded to. 
const upload = multer({ 
    dest: 'uploads/'
}); 

// set up the route as such for parsing. 
parserRoute.post('/parsefile', upload.single('UserFile'), (req, res) => { 
    // set up the file object as such where in this case it will be userResume 
    const UserFile = req.UserFile;  

    // handle error where if there is no file return a json error as such 
    if (!UserFile) { 
        return res.status(400).json({ 
            error: 'No File was Uploaded'
        }); 
    } 

}); 

module.exports = parserRoute; 