const inquirer = require('inquirer');
const addManager = require('./lib/Manager');
const addEngineer = require('./lib/Engineer');
const addIntern = require('./lib/Intern');

const managerQuestions = [
   "What is your name?",
   "What is your employee ID number?",
   "What is your e-mail address?",
   "What is your office number?"
];

const engineerQuestions = [
   "What is the engineer's name?",
   "What is the engineer's employee ID number?",
   "What is the engineer's e-mail address?",
   "What is the engineer's GitHub username?"
];

const internQuestions = [
   "What is the intern's name?",
   "What is the intern's employee ID number?",
   "What is the intern's e-mail address?",
   "Where do you go to school?"
];

function writeFile() {

}

function init() {
   var status = "manager";

   let answer =  inquirer.prompt([
      {
         type: 'input',
         name: 'name',
         message: managerQuestions[0],
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter your name.");
            }
         }
      },
      {
         type: 'input',
         name: 'empId',
         message: managerQuestions[1],
         validate: idInput => {
            if (idInput) {
               return true;
            } else {
               console.log("Please enter an employee ID number.")
            }
         }
      },
      {
         type: 'input',
         name: 'email',
         message: managerQuestions[2],
         validate: emailInput => {
            if (emailInput) {
               return true;
            } else {
               console.log("Please enter an e-mail address.");
            }
         }
      },
      {
         type: 'input',
         name: 'office',
         message: managerQuestions[3],
         validate: officeInput => {
            if (officeInput) {
               return true;
            } else {
               console.log("Please enter an office number.");
            }
         }
      },
      {
         type: 'list',
         name: 'add',
         message: "Would you like to add another employee?",
         choices: ['Add an engineer', "Add an intern", "No, I'm all done!"]
      }
   ])
   .then(employeeData => {
      if (employeeData.add === "No, I'm all done!") {
         return addManager(employeeData);
      }
      else if (employeeData.add === "Add an engineer") {
         return addEngineer(employeeData);
      } else {
      }
   })
}

init();