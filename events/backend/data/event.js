const fs = require('node:fs/promises');
const { v4: generateId } = require('uuid');
const { NotFoundError } = require('../util/errors');

const readData = async () => {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
};

const writeData = async (data) => {
  await fs.writeFile('events.json', JSON.stringify(data));
};

const getAll = async () => {
  const storedData = await readData();
  if (!storedData.events) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.events;
};

const get = async (id) => {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return event;
};

const add = async (data) => {
  const storedData = await readData();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeData(storedData);
};

const replace = async (id, data) => {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  };

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  };

  storedData.events[index] = { ...data, id };

  await writeData(storedData);
};

const remove = async (id) => {
  const storedData = await readData();
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  await writeData({events: updatedData});
};

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
