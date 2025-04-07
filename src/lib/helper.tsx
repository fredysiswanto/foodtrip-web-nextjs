export function getRandomNumber(num: number): number {
  return Math.floor(Math.random() * num) + 1
}
export function getRandomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
