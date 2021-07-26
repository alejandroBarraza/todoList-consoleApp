const Task = require('./task');

class Tasks {
    constructor() {
        this._listTask = {};
    }
    //create a new task
    createTask(taskToCreate) {
        const task = new Task(taskToCreate);
        this._listTask[task.id] = task;
    }
    //transfomr arr task to object task
    arrToObject(arrTasks = []) {
        arrTasks.forEach((task) => {
            this._listTask[task.id] = task;
        });
    }
    //return array of tasks
    get toArray() {
        // trasnform list tasks object in a array of tasks
        return Object.values(this._listTask);
    }
}
module.exports = Tasks;
