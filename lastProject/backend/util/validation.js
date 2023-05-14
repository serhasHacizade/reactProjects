const isValidText = (value) => {
  return value && value.trim().length > 0;
};

const isValidDate = (value) => {
  const date = new Date(value);
  return value && date !== 'Invalid Date';
};

const isValidImageUrl = (value) => {
  return value && value.startsWith('http');
};

exports.isValidText = isValidText;
exports.isValidDate = isValidDate;
exports.isValidImageUrl = isValidImageUrl;
