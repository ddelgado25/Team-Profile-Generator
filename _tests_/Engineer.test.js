const Engineer = require('../lib/Engineer');


// engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('David', 25, 'david@gmail.com', 'david12345');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('David', 25, 'david@gmail.com', 'david12345');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('David', 25, 'david@gmail.com', 'david12345');

    expect(engineer.getRole()).toEqual("Engineer");
});