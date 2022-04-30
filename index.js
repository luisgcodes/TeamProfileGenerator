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
        message: "Select Employee's role from the list below",
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
        message: "Enter Engineer's GitHub username",
        when: (answers) => answers.role === 'Engineer'
      },
      {
        type: "input",
        name: "school",
        message:
          "Enter the name of the school this Intern is currently attending",
          when: (answers) => answers.role === 'Intern',
      },
      
    ])