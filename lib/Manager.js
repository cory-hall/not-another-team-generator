const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, idNum, email, officeNum) {
      super(name, idNum, email);
      this.officeNum = officeNum;
   }

   getRole() {
      return "Manager";
   }
}

module.exports = Manager;