const argv = require('yargs').argv;
const { createFile } = require('./files');

function invokeAction({ action, filename, content}) {
  switch (action) {
    case "create":
          createFile(filename, content);
      break;

    case "get":
      // ... id
      break;

    case "find":
      // ... name email phone
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);