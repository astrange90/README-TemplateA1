// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
    .prompt([
        {   type: 'input',
            message: 'Project Title',
            name: 'project title',
        },
        {
            type: 'input',
            message: 'Description: Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation',
        },
        {
            type: 'input',
            message:'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribute',
            name: 'contribution guideline',
        },
        {
            type: 'confirm',
            message: 'Test instructions',
            name: 'Test application',
        }
    ])
// TODO: Create an array of questions for user input
const questions = ["Project Title", "Description", "Installation", "Usage", "Contribution", "Test", "Questions"];
console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
