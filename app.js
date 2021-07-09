const { menu, pause } = require('./messages');

const main = async () => {
    let option = '';

    do {
        option = await menu();
        console.log(option);

        if (parseInt(option) === 0) {
            console.log('bye');
            return;
        }
        await pause();
    } while (option != 0);
};

main();
