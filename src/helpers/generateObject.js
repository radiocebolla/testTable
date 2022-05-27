export const generateObject = function () {
  // const name = Math.random()
  //   .toString(33)
  //   .replace(/[^а-я]+/g, "")
  //   .slice(0, 5);

  let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let name = "";
  for (let i = 0; i < 5; i++) {
    name += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
  }

  const price = Math.random() * (1000.0 - 0.01) + 0.01;
  const amount = Math.round(Math.random() * (100 - 1) + 1);
  const cost = price * amount;

  //сформировать объект, который мы будем использовать в функции generateRows
  const row = { name, price, amount, cost };
  return row;
};
