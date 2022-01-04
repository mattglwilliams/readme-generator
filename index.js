const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions')
const utils = require('./utils')

async function init() {
    const answers = await inquirer.prompt(questions)
  
    if (answers) {
      const readmeContent = utils.generateHTML(answers);
  
      fs.writeFile('index.html', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    } else {
      console.error("Something went wrong")
    }
  }
  
  init();