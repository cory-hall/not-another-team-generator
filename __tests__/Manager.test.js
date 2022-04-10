const Manager = require('../lib/Manager');

test('creates a manager object', () => {
   const manager = new Manager('Link', 1, 'email@email', 1);

   expect(manager.name).toBe('Link');
   expect(manager.idNum).toBe(1);
   expect(manager.email).toBe('email@email');
   expect(manager.officeNum).toBe(1);
});

test('get manager role from getRole method', () => {
   const manager = new Manager('Link', 1, 'email@email', 1);

   expect(manager.getRole()).toBe('Manager');
});

test('get manager office number from getOfficeNum method', () => {
   const manager = new Manager('Link', 1, 'email@email', 1);

   expect(manager.getOfficeNum()).toBe(1);
});