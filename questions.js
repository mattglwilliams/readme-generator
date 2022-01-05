const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project about?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project?",
    choices: ["Apache", "MIT", "MPL", "ISC"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Please add any contribution guidelines for future development.",
  },
  {
    type: "input",
    name: "testing",
    message: "Please add any testing instructions.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

module.exports = questions;
