module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let closingBrackets = {};

  bracketsConfig.forEach((config) => {
    closingBrackets[config[1]] = config[0];
  });

  for(let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (closingBrackets.hasOwnProperty(letter)) {

      let stackLastChar = stack[stack.length - 1];
      let openingBracket = closingBrackets[letter];

      if (letter === openingBracket) {
        if (stackLastChar === letter) {
          stack.pop()
        } else {
          stack.push(letter);
        }
        continue;
      }
      
      if (openingBracket === stackLastChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(letter);
    }
  }

  return stack.length === 0;
}

















