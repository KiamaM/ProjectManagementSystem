"use strict";
let form = document.querySelector('form');
let projectName = document.querySelector('#projectName');
let employee = document.querySelector('#employee');
let save = document.querySelector('#save');
let viewAll = document.querySelector('#view');
let deleteProject = document.querySelector('#delete');
let project = [];
class Projects {
    constructor(name, tasker) {
        this.name = '';
        this.tasker = '';
        this.name;
        this.tasker;
    }
    display() {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let todo = projectName.value.trim() != '' && employee.value.trim() != '';
            if (todo) {
                let task = {
                    name: projectName.value.trim(),
                    tasker: employee.value.trim()
                };
                project.push(task);
            }
        });
    }
    remove() {
    }
}
