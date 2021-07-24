const Task = require('./task');

class Tasks {
    constructor() {
        this._listTask = {};
    }
    createTask(taskToCreate) {
        const task = new Task(taskToCreate);
        this._listTask[task.id] = task;
    }
}
module.exports = Tasks;
