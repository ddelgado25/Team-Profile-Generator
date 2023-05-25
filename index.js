const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamArray = [];

// Team Member Questions:

//Engineer: 
const engineerQuestions = [

    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the name of the engineer.'
    },

    {
        type: 'input',
        name: 'engineerID',
        message: 'Please enter the engineers ID number'
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the engineers email address'
    },

    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Please Enter engineers gitHub profile name'
    },
]

//Intern:
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the name of the intern.'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Please enter the interns ID number',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the interns email address'
    },

    {
        type: 'input',
        name: 'internSchool',
        message: 'What School does the intern currently attend if any? If the interns does not currently attended any school please put "N/A". ',
    },
]

// Manager: 
const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager that runs this team.'
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'Please enter the managers ID number'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the managers email adress'
    },

    {
        type: 'input',
        name: 'office',
        message: 'Please enter the managers office number'
    },
]

//Question to add another User/Team member

const anotherOne = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the the next type of team member you would like to add, if you are done select "Done" to generate your team ',
        choices: ['Intern', 'Engineer', 'Done']
    }
]



function init() {
    //starts with the manager function
    managerPrompt();
}


//function that will prompt the user to select the next type of employee they are adding 
function next() {
    inquirer.prompt(anotherOne).then((response) => {

        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Done':
                console.log('Creating your team!')
                createTeam();
        }
    })
}
//Function for Manager prompt
function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        // creats an object for this manager 
        const manager = new Manager(name, id, email, office);
        //pushes the new manager object to the empty array to be used later 
        teamArray.push(manager);
    
        console.log(teamArray);

        next();
    })
}
//Function for Engineer prompt
function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response.engineerName;
        let id = response.engineerID;
        let email = response.engineerEmail;
        let github = response.engineerGithub;
        // creats an object for this manager 
        const engineer = new Engineer(name, id, email, github);

        teamArray.push(engineer);
        console.log(teamArray);
       
        next();
    })
}

//Function for Intern prompt
function internPrompt() {
    inquirer.prompt(internQuestions).then((response) => {

        let name = response.internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.internSchool;

        const intern = new Intern(name, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);

       
        next();
    })
}

//function to Create the file 
function createTeam() {
    fs.writeFile(outputPath, render(teamArray), function (err) {
        if (err) {
            return console.log(err)
        }
    })

}

//calls the initiating function 
init();