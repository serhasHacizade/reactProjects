const fs = require('node:fs/promises');

const readData = async () => {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
}

const writeData = async (data) => {
  await fs.writeFile('events.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;