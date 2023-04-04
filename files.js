const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const dataValidator = require('./helpers/dataValidator');
const checkExtantion = require('./helpers/checkExtention');

const createFile = (filename, content) => {
  const data = {
    filename,
    content,
  };

  const result = dataValidator(data);

  if (result.error) {
    console.log(
      chalk.red(
        `Please specify key "${result.error.details[0].context.key}" parameter`
      )
    );
    return;
  }
  const { permission, extantion } = !checkExtantion(filename);
  if (!permission) {
    console.log(
      chalk.red(`Sorry, this app doesn't support ${extantion} extension`)
    );
  }
};

module.exports = { createFile };
