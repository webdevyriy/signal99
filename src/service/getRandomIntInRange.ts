/**
 Returns a random integer between the specified minimum and maximum range.
 */
const getRandomIntegerInRange = (minRange: number, maxRange: number): number => {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIntegerInRange;