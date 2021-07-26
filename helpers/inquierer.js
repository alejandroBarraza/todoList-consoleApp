const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opt',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Create a new task`,
            },
            {
                value: 2,
                name: `${'2.'.green} Show list task`,
            },
            {
                value: 3,
                name: `${'3.'.green} Show completed task`,
            },
            {
                value: 4,
                name: `${'4.'.green} Show pending task`,
            },
            {
                value: 5,
                name: `${'5.'.green} Strike a task`,
            },
            {
                value: 6,
                name: `${'6.'.green} Delete a task`,
            },
            {
                value: 0,
                name: `${'7.'.green} Exit`,
            },
        ],
    },
];

const inquiereMenu = async () => {
    console.clear();
    console.log('======================'.green);
    console.log('   select an option'.white);
    console.log('======================\n'.green);

    const { opt } = await inquirer.prompt(questions);
    return opt;
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'pause',
            message: `Press ${'enter'.green} to continue`,
        },
    ];
    console.log(`\n`);
    await inquirer.prompt(question);
};

const questionInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'taskInput',
            message,
            validate(value) {
                if (value.length === 0) {
                    return `please, insert a new task`;
                }
                return true;
            },
        },
    ];

    const { taskInput } = await inquirer.prompt(question);
    return taskInput;
};

module.exports = {
    inquiereMenu,
    pause,
    questionInput,
};
