const { inquiereMenu, pause, questionInput } = require('./helpers/inquierer');
const Task = require('./helpers/models/task');
const Tasks = require('./helpers/models/Tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();
    do {
        option = await inquiereMenu();

        switch (option) {
            case 1:
                // create a new Task
                const answer = await questionInput('Insert a new Task: ');
                tasks.createTask(answer);
                await pause();
                break;

            case 2:
                //show list Task
                console.log(tasks._listTask);
                await pause();
                break;
        }
    } while (option !== 0);
};

main();
