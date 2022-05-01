// Const Variables 
const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = require("./src/generateHtml")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Prompts
var employeePrompts = [];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employee's name:",
      },

      {
        type: "number",
        name: "id",
        message: "Enter employee's ID:",
      },

      {
        type: "input",
        name: "email",
        message: "Enter employee's email:",
        validate: function(email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                console.log(validate('enter a valid email address'))
            }
      },

      {
        type: "list",
        name: "role",
        message: "Select Employee's Role",
        choices: ["Manager", "Engineer", "Intern"],
       
      },

      {
        type: "number",
        name: "officeNumber",
        message: "Enter Manager's office number",
        when: (answers) => answers.role === 'Manager'
      },
      {
        type: "input",
        name: "github",
        message: "Enter GitHub username",
        when: (answers) => answers.role === 'Engineer'
      },
      {
        type: "input",
        name: "school",
        message:
          "Enter name of Intern's School",
          when: (answers) => answers.role === 'Intern',
      },
      
    ])
    .then((answers) => {
        if(answers.role === "Manager") {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          employeePrompts.push(manager);
        } else if(answers.role === "Engineer") {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employeePrompts.push(engineer);
        } else {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          employeePrompts.push(intern);
        }
        menu();
      });
  }

  function menu() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Would you like to add another team member?",
        choices: ['Add another Team Member', 'I dont need to add another Team Member.']
      }
    ])
    .then((answers) => {
      if(answers.option === "Add another Team Member") {
        init();
      } else {
        writeHtmlFile(employeePrompts);
      }
    })
  }
  
  function writeHtmlFile(data) {
    fs.writeFile("./dist/index.html", generateHtml(data), function (err) {
      if (err) {
        throw err;
      } else {
        console.log("File Created!");
      }
    });
  }
  
  init();