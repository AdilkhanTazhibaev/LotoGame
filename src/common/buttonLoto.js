export const genterateArray = () => {
  let arrayItem = [];

  for (let i = 1; i <= 20; i++) {
    arrayItem.push({
      number: i,
    });
  }

  return arrayItem.concat(arrayItem);
};

export const arraySlice = (array) => {
  let arrayOne = [];
  let arrayTwo = [];
  array.map((item, index) => {
    if (index < 20) {
      return arrayOne.push({ ...item, index });
    } else {
      return arrayTwo.push({ ...item, index });
    }
  });
  return [arrayOne, arrayTwo];
};
