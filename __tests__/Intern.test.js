const Intern = require('../lib/Intern');

test('creates an intern object', () => {
   const intern = new Intern("Link", 1, "email@email", "MSU@school");

   expect(intern.name).toBe("Link");
   expect(intern.idNum).toBe(1);
   expect(intern.email).toBe("email@email");
   expect(intern.school).toBe("MSU@school");
});

test('gets intern school name from getSchool method', () => {
   const intern = new Intern("Link", 1, "email@email", "MSU@school");

   expect(intern.getSchool()).toBe("MSU@school");
});

test('gets intern role from getRole method', () => {
   const intern = new Intern("Link", 1, "email@email", "MSU@school");

   expect(intern.getRole()).toBe("Intern");
})