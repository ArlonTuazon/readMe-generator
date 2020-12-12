const fs = require ('fs');
const inquirer = require ('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your Project?',
        validate: reply => {
            if (reply) {
                return true;
            }
            else {
            console.log ('Please enter Project Name!');
            return false;    
            }
        }
    },


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
