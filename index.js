const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");
const utils = require("./utils");

async function init() {
  const answers = await inquirer.prompt(questions);

  if (answers) {
    const readmeContent = utils.generateMarkdown(answers);

    fs.writeFile("TestREADME.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created your README!")
    );
  } else {
    console.error("Something went wrong");
  }
}

init();
