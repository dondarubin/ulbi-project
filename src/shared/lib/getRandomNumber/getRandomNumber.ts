export function getRandomNumber(): number {
  const min = 0;
  const max = 100000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
