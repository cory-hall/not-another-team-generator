const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, idNum, email, officeNum) {
      // get name, idNum and email from
      // employee parent class
      super(name, idNum, email);
      this.officeNum = officeNum;
      this.role = "Manager";
   }

   // getter for class officeNum
   getOfficeNum() {
      return this.officeNum;
   };

   // getter for class role
   getRole() {
      return this.role;
   };

};

module.exports = Manager;