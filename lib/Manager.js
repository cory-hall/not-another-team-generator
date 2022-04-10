const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, idNum, email, officeNum) {
      super(name, idNum, email);
      this.officeNum = officeNum;
      this.role = "Manager";
   }

   getOfficeNum() {
      return this.officeNum;
   };

   getRole() {
      return this.role;
   };

};

module.exports = Manager;