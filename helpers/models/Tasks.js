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
    //delete a task given an id
    DeleteTaks(id) {
        if (this._listTask[id]) {
            delete this._listTask[id];
        }
    }
    //toggle a task , recive an array ids(completed) for change status in corresponding object(t),t>=0....t
    toggleTask(ids) {
        ids.forEach((task) => {
            const taskToggle = this._listTask[task];
            if (!taskToggle.status) {
                //set status to task
                taskToggle.status = 'ok';
            }
        });
        //id not given in ids array , change status to pending task(null)
        this.toArray.forEach((task) => {
            if (!ids.includes(task.id)) {
                this._listTask[task.id].status = null;
            }
        });
    }

    //return array of tasks
    get toArray() {
        // trasnform list tasks object in a array of tasks
        return Object.values(this._listTask);
    }
}
module.exports = Tasks;
