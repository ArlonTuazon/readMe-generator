
const fs = require ('fs');
const inquirer = require ('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "author",
        message: "What is the author's name?",
        validate: userAuthor => {
            if (userAuthor) {
                return true;
            }
            else {
                console.log ('Please Enter your Name!')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: userEmail => {
            if (userEmail) {
                return true;
            }
            else {
                console.log ('Please Enter your email address!')
                return false;
            }
        }
    },

     {  type: 'input',
        name: 'userName',
        message: 'What is your Github Username?',
        validate: userGit => {
            if (userGit) {
                return true;
            }
            else {
                console.log ('Please Enter your GitHub Username!')
                return false;
            }
        }
     },
     {   
        type: 'input',
        name: 'title',
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
     {
         type: 'input',
         name: 'description',
         message: 'Write a brief description of your Project:',
         validate: desc => {
             if (desc) {
                 return true;
             }
             else {
                 console.log ('Please enter a Description!')
                 return false;
             }
         }
     },
     {
         type: 'input',
         name: 'installation',
         message: 'List the commands required to install your Project:'
     },
     {
         type: 'input',
         name: 'usage',
         message: 'Provide instructions for the user on the usage of your Project:'
     },
     {
         type: 'list',
         name: 'license',
         message: 'Choose a license for your Project:',
         choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
     },
     {
         type: 'input',
         name: 'test',
         message: 'Provide commands on how to run the test:'
     },
     {
         type: 'input',
         name: 'contribute',
         message: 'Tell user on how to contribute on your Project:'
     },
  ])

} 

promptUser().then(function(response){
     const markdown = generateMarkdown(response);
     return writeFileAsync("./newReadMe/newREADME.md", markdown);
}).then(function () {
        console.log("Success! You generated a ReadMe file.");
    }).catch(function(err){
    console.log(err)
})

// // function to write README file
// function writeToFile(fileName, data) {
//     fs.write
// }

// // // function to initialize program
// function init() {

// }

// // // function call to initialize program
// init();
