const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/html-template');

const questions = [
   "What is the employee's name?",
   "What is the employee's ID number?",
   "What is the employee's e-mail address?",
   "What is the employee's role at the company?"
];

let teamArr = [];

const writeFile = () => {
   let newFile = generateHtml();
   fs.writeFile('./dist/index.html', newFile, err => {
      if (err) {
         console.log("Error creating file!");
      } else {
         console.log("File created successfully!");
      }
   })
}

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
      .then(employeeData => {
         if (employeeData.role === "Manager") {
            return managerPrompt(employeeData);
         }
         else if (employeeData.role === "Engineer") {
            return engineerPrompt(employeeData);
         }
         else if (employeeData.role === "Intern") {
            return internPrompt(employeeData);
         }
      })
      .then( () => {
         return confirmAddMore()
      });
}

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
      .then(managerData => {
         const manager = new Manager(employeeData.name, employeeData.empId, employeeData.email, managerData.var)
         teamArr.push(manager);
      })
};

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
      .then(engineerData => {
         const engineer = new Engineer(employeeData.name, employeeData.empId, employeeData.email, engineerData.var)
         teamArr.push(engineer);
      })
};

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
   .then(internData => {
      const intern = new Intern(employeeData.name, employeeData.empId, employeeData.email, internData.var)
      teamArr.push(intern);
   })
};

const confirmAddMore = () => {
   return inquirer.prompt([
      {
         type: 'confirm',
         name: 'confirmAddMore',
         message: "Would you like to add more employees?",
         default: true
      }
   ])
      .then(answer => {
         if (answer.confirmAddMore) {
            initialPrompt();
         } else {
            return console.log(teamArr);
         }
      })
}



initialPrompt()
   .then(writeFile)