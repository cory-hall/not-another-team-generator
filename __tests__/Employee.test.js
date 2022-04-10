const Employee = require('../lib/Employee');

test('creates an employee object', () => {
   const employee = new Employee('Link', 1, 'email@email');

   expect(employee.name).toBe('Link');
   expect(employee.idNum).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

test('get employee name from getName method', () => {
   const employee = new Employee('Link', 1, 'email@email');

   expect(employee.getName()).toBe('Link')
});

test('get employee id from getId method', () => {
   const employee = new Employee('Link', 1, 'email@email');

   expect(employee.getId()).toBe(1);
});

test('get employee email from getEmail method', () => {
   const employee = new Employee('Link', 1, 'email@email');

   expect(employee.getEmail()).toBe("email@email");
});

test('get employee role from getRole() method', () => {
   const employee = new Employee('Link', 1, 'email@email');

   expect(employee.getRole()).toBe("Employee");
});