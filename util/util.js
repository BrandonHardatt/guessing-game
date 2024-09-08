
export const generateRandomInteger = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; };
  
export const generateRandomIntegerExcluding = (min, max, exclude) => {
    let randomNumber;

    do {
        randomNumber = generateRandomInteger(min, max);
    } while (randomNumber === exclude);

    return randomNumber;
};
  