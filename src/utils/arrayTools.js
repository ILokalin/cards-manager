const getRandomRange = (max) => {
  return Math.floor(Math.random() * max);
};

export const getRandomElement = (data) => {
  return data[getRandomRange(data.length)];
};
