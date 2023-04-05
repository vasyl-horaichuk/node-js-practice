const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const dataValidator = require('./helpers/dataValidator');
const checkExtansion = require('./helpers/checkExtension');

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
  const { permission, extansion } = checkExtansion(filename);
  if (!permission) {
    console.log(
      chalk.red(`Sorry, this app doesn't support ${extansion} extension`)
    );
  }

  const pathWriteFile = path.join(__dirname, './files', filename);

  fs.writeFile(pathWriteFile, content, 'utf-8')
    .then(console.log(chalk.greenBright('File was successfully created!')))
    .catch(console.error);
};

const getFiles = () => {
  const pathGetFiles = path.join(__dirname, './files');

  fs.readdir(pathGetFiles)
    .then(files => {
      if (!files.length) {
        console.log(chalk.red('Not files here!'));
      }
      console.log(files);
    })
    .catch(console.error);
};

const getFile = filename => {
  const pathGetFile = path.join(__dirname, './files');

  fs.readdir(pathGetFile)
    .then(files => {
      if (!files.includes(filename)) {
        console.log(
          chalk.red(`No file with filename: ${filename} in this directory!`)
        );
      }
      fs.readFile(pathGetFile, 'utf-8', filename).then(files => {});
    })
    .catch(console.error);
};

module.exports = { getFile, getFiles, createFile };

// node index --action create --filename file.js --content const text = "text"
// node index --action get --filename file.js
// node index --action find --filename abc.js
