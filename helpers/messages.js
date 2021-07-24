const { stdin, stdout } = require('process');

require('colors');

const menu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log('======================'.green);
        console.log('   select an option'.green);
        console.log('======================\n'.green);
        console.log(`${'1.'.green} new task`);
        console.log(`${'2.'.green} list tasks`);
        console.log(`${'3.'.green} list task completed`);
        console.log(`${'4.'.green} new task pending`);
        console.log(`${'5.'.green} complete task`);
        console.log(`${'6.'.green} delete a task`);
        console.log(`${'0.'.green} exit`);

        const readLine = require('readline').createInterface({
            input: stdin,
            output: stdout,
        });
        readLine.question('select an option: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    });
};

const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: stdin,
            output: stdout,
        });

        readLine.question(`Press ${'ENTER'.green} for cotinue`, (opt) => {
            readLine.close();
            resolve();
        });
    });
};

module.exports = {
    menu,
    pause,
};
