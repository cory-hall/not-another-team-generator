const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
   "What is the employee's name?",
   "What is the employee's ID number?",
   "What is the employee's e-mail address?",
   "What is this employee's role at the company?"
];

function writeFile() {

}

function init() {
   let userInput1 = inquirer.prompt([
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
   ]);

   let userInput2;

   if (userInput1.role === 'Manager') {
      userInput2 = inquirer.prompt ([
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

      const manager = new Manager(userInput1.name, userInput1.empId, userInput1.email, userInput2.var)
   }
}

init();