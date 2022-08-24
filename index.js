const inquirer = require("inquirer");
const db = require("./db/connection");
require("console-table");

const menuOption=() {
    inquirer.prompt(
        {
            type: "list",
            name: "menu",
            message: "Choose Options:",
            choices: ['[1] Departments', '[2] Roles', '[3] Employees', '[4] Exit']
        })
}