// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(data) {
    


}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Enter usage:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter credits:',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Enter license:',
            name: 'license',
        },
        {
            type: 'input',
            message: "Enter badges:",
            name: 'badges',
        },
        {
            type: 'input',
            message: "Enter features:",
            name: 'features',
        },
        {
            type: 'input',
            message: "Enter contribution instructions:",
            name: 'contribution-instructions',
        },
        {
            type: 'input',
            message: "Generate table of contents? (y/n)",
            name: 'contents',
        },
    ])
    .then((response) => 
    writeToFile(response)
);

}

// Function call to initialize app
init();
