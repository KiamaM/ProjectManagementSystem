let form = <HTMLFormElement>document.querySelector('form')

let projectName = <HTMLFormElement>document.querySelector('#projectName')

let employee = <HTMLSelectElement>document.querySelector('#employee')

let save = <HTMLButtonElement>document.querySelector('#save')

let viewAll = <HTMLButtonElement>document.querySelector('#view')

let deleteProject = <HTMLButtonElement>document.querySelector('#delete')

interface formData{
    name:string
    tasker:string
}
let project:Array<string>[] = []

class Projects implements formData{
    name =''
    tasker = ''
    constructor(name:string, tasker:string){
        this.name
        this.tasker
    }
    display(){
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            let todo = projectName.value.trim()!= '' && employee.value.trim()!=''
            if(todo){
                let task={
                    name: projectName.value.trim(),
                    tasker: employee.value.trim()
                }
                project.push(task)
            }

        })
    }
    remove(){

    }
}