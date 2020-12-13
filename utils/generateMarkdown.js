// function to generate markdown for README
function generateMarkdown(response) {
  let badge = "";
    if(response.license == "MIT"){
        badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
    }else if (response.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    }else if (response.license == "GPL 3.0"){
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }else if (response.license == "BSD 3"){
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
  
  
  
  
  return `# ${response.title} ${badge}

  ## ${response.description}

  ## Table of Contents
     * [Installation](#installation)
     * [Usage](#usage)
     * [License](#license)
     * [Contributing](#contributing)
     * [Tests](#tests)
     * [Questions](#questions)
     
  ## Installation:
     Steps required to install this Project.
     ${response.installation}

  ## Usage:
     Uses for this Project.
     ${response.usage}

  ## License
     This Project is under License of:
     ${response.license}

  ## Contributing
     If you want to contribute, please follow the guidelines.
     ${response.contribute}
  
  ## Tests
     Instruction on how to run this project:
     ${response.test}   

  ## Questions
     If you have any questions, you may contact me on 
     [GitHub] (https://github.com/${response.userName}) or contact 
     ${response.author} at ${response.email}
     ![picture](https://github.com/${response.userName}.png?size=80)   

`;
}

module.exports = generateMarkdown;
