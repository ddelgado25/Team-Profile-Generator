const Manager = require('../lib/Manager');

// creates the Manager object 
test('creates an Manager object', () => {
    const manager = new Manager('David', 25, 'david@gmail.com', 22);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role of employee
test('gets role of employee', () => {
    const manager = new Manager('David', 25, 'david@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 