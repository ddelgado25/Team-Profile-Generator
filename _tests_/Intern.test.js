// Intern constructor 
const Intern = require('../lib/Intern');

//creates an Intern object 
test('creates an Intern object', () => {
    const intern = new Intern('David', 25, 'david@gmail.com', 'UCF');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets intern school
test('gets intern school', () => {
    const intern = new Intern('David', 25, 'david@gmail.com', 'UCF');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role of employee
test('gets role of employee', () => {
    const intern = new Intern('David', 25, 'david@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
}); 