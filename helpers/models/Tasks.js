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
    //show all tasks in order (number,description,state)
    listShowAll() {
        const data = this.toArray;
        data.forEach(({ description, status }, index) => {
            const statusTask = status === null ? 'pendiente'.red : 'completada'.green;
            const idx = `${index + 1}`.green;
            const taskDescription = `${idx} ${description} :: ${statusTask}`;
            console.log(taskDescription);
        });
    }

    listCompletedPending(state = true) {
        const tasks = this.toArray;
        let idx = 0;
        tasks.forEach(({ description, status }) => {
            const statusTask = status === null ? 'pendiente'.red : 'completada'.green;
            if (state) {
                if (status !== null) {
                    idx++;
                    const taskCompleted = `${idx} ${description} :: ${statusTask}`;
                    console.log(taskCompleted);
                }
            } else {
                if (status === null) {
                    idx++;
                    const taskPending = `${idx} ${description} :: ${statusTask}`;
                    console.log(taskPending);
                }
            }
        });
    }

    DeleteTaks(id) {
        if (this._listTask[id]) {
            delete this._listTask[id];
        }
    }
    //return array of tasks
    get toArray() {
        // trasnform list tasks object in a array of tasks
        return Object.values(this._listTask);
    }
}
module.exports = Tasks;
