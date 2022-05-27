import { generateObject } from "./generateObject";

export const generateRows = function () {
  let arr = [];
  for (let i = 1; i <= 50; i++) {
    let newObject = generateObject();
    arr.push(newObject);
  }
  return arr;
};
