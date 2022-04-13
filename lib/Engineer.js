const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, idNum, email, github) {
      // get name, idNum and email from
      // employee parent class
      super(name, idNum, email);
      this.github = github;
      this.role = "Engineer";
   }

   // getter for class github
   getGithub() {
      return this.github;
   }

   // getter for class role
   getRole() {
      return this.role;
   }
}

module.exports = Engineer;