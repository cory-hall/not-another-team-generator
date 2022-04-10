class Employee {
   constructor(name, idNum, email) {
      this.name = name;
      this.idNum = idNum;
      this.email = email;
      this.role = "Employee";
   };

   getName() {
      return this.name;
   };

   getId() {
      return this.idNum;
   };

   getEmail() {
      return this.email;
   };

   getRole() {
      return this.role;
   };
};

module.exports = Employee;