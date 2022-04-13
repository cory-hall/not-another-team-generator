class Employee {
   constructor(name, idNum, email) {
      this.name = name;
      this.idNum = idNum;
      this.email = email;
      this.role = "Employee";
   };

   // getter for class name
   getName() {
      return this.name;
   };

   // getter for class idNum
   getId() {
      return this.idNum;
   };

   // getter for class email
   getEmail() {
      return this.email;
   };

   // getter for class role
   getRole() {
      return this.role;
   };
};

module.exports = Employee;