fs = require('fs');
const file = './database/data.json';

const saveToDB = (data) => fs.writeFileSync(file, JSON.stringify(data));

const readDb = () => {
    //check if file exist
    if (!fs.existsSync(file)) return null;

    // to read 'data.json' file
    const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
    const dataParse = JSON.parse(data);
    return dataParse;
};

module.exports = {
    saveToDB,
    readDb,
};
