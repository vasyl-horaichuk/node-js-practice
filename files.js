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
    console.log(data);

}

module.exports = { createFile };