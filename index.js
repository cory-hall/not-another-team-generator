// required libs / modules
const inquirer = require('inquirer');
const fs = require('fs');

// importing classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// deconstructed variables for HTML generation
const { generateHTML, generateCards } = require('./src/html-template');

// hold entire input team
let teamArr = [];
// holds entire team card HTML generation
let cardString = ``;

// prompt questions, minus role specific ones
const questions = [
   "What is the employee's name?",
   "What is the employee's ID number?",
   "What is the employee's e-mail address?",
   "What is the employee's role at the company?"
];

// this function will write the HTML file in the dist directory
const writeFile = () => {
   // loop over each object in teamArr
   for (let i = 0; i < teamArr.length; i++) {
      // append each generated card to cardString
      cardString = cardString + generateCards(teamArr[i]);
   }

   // declare finalFile to generate the entire HTML page,
   // passing in the cardString generated to create each employee card
   let finalFile = generateHTML(cardString);

   // write the file and handle errors
   fs.writeFile('./dist/index.html', finalFile, err => {
      if (err) {
         console.clear();
         console.log("There was an error generating your file.");
      } else {
         console.clear();
         console.log("File successfully created");
      }
   })
}

// the initial function on app startup,
// this function handles the initial prompts and returns a promise
const initialPrompt = () => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'name',
         message: questions[0],
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter employee's name.");
            }
         }
      },
      {
         type: 'input',
         name: 'empId',
         message: questions[1],
         validate: idInput => {
            if (idInput) {
               return true;
            } else {
               console.log("Please enter employee's ID number.")
            }
         }
      },
      {
         type: 'input',
         name: 'email',
         message: questions[2],
         validate: emailInput => {
            if (emailInput) {
               return true;
            } else {
               console.log("Please enter employee's e-mail address.");
            }
         }
      },
      {
         type: 'list',
         name: 'role',
         message: questions[3],
         choices: ['Manager', "Engineer", "Intern"]
      }
   ])
   // then take the promise from initialPrompt function
   // and do something based on selected role
   // there are different calls here because each role
   // has a different question
      .then(employeeData => {
         // if the role is manager, call the managerPrompt function
         if (employeeData.role === "Manager") {
            return managerPrompt(employeeData);
         }
         // if the role is engineer, call the engineerPrompt function
         else if (employeeData.role === "Engineer") {
            return engineerPrompt(employeeData);
         }
         // if the role is intern, call the internPrompt function
         else if (employeeData.role === "Intern") {
            return internPrompt(employeeData);
         }
      })
      // using .then async programming, call the prompt to
      // ask the user if they would like to add more employees
      .then(() => {
         return confirmAddMore()
      });
}

// this function is used to handle the manager specific prompt
// and then create a new manager object with the manager class
// finally add the new object to teamArr
const managerPrompt = employeeData => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'var',
         message: "What is the manager's office number?",
         validate: varInput => {
            if (varInput) {
               return true;
            } else {
               console.log("Please enter an office number.");
            }
         }
      }
   ])
   // after prompt, create a new object and add object to teamArr
      .then(managerData => {
         const manager = new Manager(employeeData.name, employeeData.empId, employeeData.email, managerData.var)
         teamArr.push(manager);
      })
};

// this function is used to handle the engineer specific prompt
// and then create a new engineer object with the engineer class
// finally add the new object to teamArr
const engineerPrompt = employeeData => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'var',
         message: "What is the engineer's GitHub account name?",
         validate: varInput => {
            if (varInput) {
               return true;
            } else {
               console.log("Please enter the engineer's GitHub account.");
            }
         }
      }
   ])
   // after prompt, create a new object and add object to teamArr
      .then(engineerData => {
         const engineer = new Engineer(employeeData.name, employeeData.empId, employeeData.email, engineerData.var)
         teamArr.push(engineer);
      })
};

// this function is used to handle the intern specific prompt
// and then create a new intern object with the intern class
// finally add the new object to teamArr
const internPrompt = employeeData => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'var',
         message: "Where does the intern go to school?",
         validate: varInput => {
            if (varInput) {
               return true;
            } else {
               console.log("Please enter the intern's school.");
            }
         }
      }
   ])
   // after prompt, create a new object and add object to teamArr
      .then(internData => {
         const intern = new Intern(employeeData.name, employeeData.empId, employeeData.email, internData.var)
         teamArr.push(intern);
      })
};

// this function is used to prompt the user if they would
// like to add more employees
const confirmAddMore = () => {
   return inquirer.prompt([
      {
         type: 'confirm',
         name: 'confirmAddMore',
         message: "Would you like to add more employees?",
         default: true
      }
   ])
   // after prompt
      .then(answer => {
         // if user wishes to add more
         // call the initialPrompt function
         if (answer.confirmAddMore) {
            initialPrompt();
            // if the user is done
            // write the HTML file
         } else {
            writeFile();
         }
      })
}

// call the initial prompt function on start up
initialPrompt();