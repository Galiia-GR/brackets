module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig + "";
  const arrConfig = config.split(",");
  const cofigOpen = ["(", "{", "[", "|"];
  const configClose = [")", "}", "]", "|"];

  let stack = [];

  const newOpen = arrConfig.filter((el) => cofigOpen.includes(el));
  const newClose = arrConfig.filter((el) => configClose.includes(el));

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (newOpen.includes(symbol)) {
      stack.push(symbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let highSymbol = stack[stack.length - 1];

      if (newClose[symbol] != highSymbol) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};
