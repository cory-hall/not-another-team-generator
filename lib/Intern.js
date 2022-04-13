const Employee = require('./Employee');

class Intern extends Employee {
   constructor(name, idNum, email, school) {
      // get name, idNum and email from
      // employee parent class
      super(name, idNum, email)
      this.school = school;
      this.role = "Intern";
   }

   // getter for class school
   getSchool() {
      return this.school;
   }

   // getter for class role
   getRole() {
      return this.role;
   }
}

module.exports = Intern