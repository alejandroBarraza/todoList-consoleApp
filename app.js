const { saveToDB, readDb } = require('./database/utilsDB');
const { inquiereMenu, pause, questionInput } = require('./helpers/inquierer');
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
        }
        saveToDB(tasks.toArray);
    } while (option !== 0);
};

main();
