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

const view_department = () {
    const view_department=`SELECT department AS department_id FROM department`
};

const view_role = () {
    const view_role=`SELECT role AS role.id FROM department`
};

const view_emps = () {
    const view_emps=`SELECT department AS department_id FROM department`
};

const add_dept = () {
    const add_dept=`SELECT employee AS employee from department`
};

const add_emp = () {
    const view_department=`INSERT INTO roles`
};

initializeApp();