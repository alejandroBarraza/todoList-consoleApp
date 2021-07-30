const { saveToDB, readDb } = require('./database/utilsDB');
const {
    inquiereMenu,
    pause,
    questionInput,
    questionDeleteTask,
    confirmation,
    strikeTask,
} = require('./helpers/inquierer');
const Task = require('./helpers/models/task');
const Tasks = require('./helpers/models/Tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();
    const loadData = readDb();
    if (loadData) tasks.arrToObject(loadData);

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
                tasks.listShowAll();
                await pause();
                break;
            case 3:
                tasks.listCompletedPending(true);
                await pause();
                break;
            case 4:
                tasks.listCompletedPending(false);
                await pause();
                break;
            case 5:
                const completeAPending = await strikeTask(tasks.toArray);
                console.log(completeAPending);
                //toggle the task
                tasks.toggleTask(completeAPending);
                await pause();
                break;
            case 6:
                const id = await questionDeleteTask(tasks.toArray);
                const confirmationQuestion = await confirmation(`would you like to delete`);
                console.log();
                console.log(confirmationQuestion);
                if (confirmationQuestion) {
                    tasks.DeleteTaks(id);
                    console.log(`task deleted succesfully`);
                }

                await pause();
                break;
        }
        saveToDB(tasks.toArray);
    } while (option !== 0);
};

main();
