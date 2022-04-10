const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
   const engineer = new Engineer('Link', 1, "email@email", 'github@github');

   expect(engineer.name).toBe("Link");
   expect(engineer.idNum).toBe(1);
   expect(engineer.email).toBe("email@email");
   expect(engineer.github).toBe("github@github");
});

test('gets engineer github username from getGithub method', () => {
   const engineer = new Engineer('Link', 1, "email@email", 'github@github');

   expect(engineer.getGithub()).toBe("github@github");
});

test('gets engineer role from getRole method', () => {
   const engineer = new Engineer('Link', 1, "email@email", 'github@github');

   expect(engineer.getRole()).toBe('Engineer');
})