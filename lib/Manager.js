const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, idNum, email, officeNum) {
      super(name, idNum, email);
      this.officeNum = officeNum;
   }

   getRole() {
      return "Manager";
   };

   getOfficeNum() {
      return this.officeNum;
   };
};

module.exports = Manager;