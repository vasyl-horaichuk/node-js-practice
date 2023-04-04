const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const dataValidator = require('./helpers/dataValidator');


const createFile = (filename, content) => { 
    const data = {
        filename,
        content
    }
    
    const result = dataValidator(data);
    console.log(result.error.details);
    //chalk "Please specify key "parametr""

}

module.exports = { createFile };