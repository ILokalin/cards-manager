export const sortAZ = (key) => {
  return (a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    return -1;
  };
};

export const sortZA = (key) => {
  return (a, b) => {
    if (a[key] < b[key]) {
      return 1;
    }
    return -1;
  };
};
