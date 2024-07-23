function capitalize(string) {
  if (!string || typeof string !== "string") {
    return null;
  }
  return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}

function reverseString(string) {
  if (!string || typeof string !== "string") {
    return null;
  }
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

function calcChecker(num1, num2) {
  return Number.isInteger(num1) && Number.isInteger(num2);
}

const calculator = {
  add: function add(num1, num2) {
    if (!calcChecker(num1, num2)) {
      return null;
    }
    return num1 + num2;
  },
  subtract: function subtract(num1, num2) {
    if (!calcChecker(num1, num2)) {
      return null;
    }
    return num1 - num2;
  },
  divide: function divide(num1, num2) {
    if (!calcChecker(num1, num2)) {
      return null;
    }
    return num1 / num2;
  },
  multiply: function multiply(num1, num2) {
    if (!calcChecker(num1, num2)) {
      return null;
    }
    return num1 * num2;
  },
};

function caesarCipher(string, shift) {
  // check for empty arguments
  if (!string || !shift) {
    return null;
  }
  let cipherText = "";
  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charCodeAt(i);
    if (currentChar >= 97 && currentChar <= 122) {
      // lowerCase
      let shiftedChar = currentChar + shift;
      if (shiftedChar > 122) {
        // Wrapping characters
        shiftedChar -= 26;
      }
      cipherText += String.fromCharCode(shiftedChar); // changing ASCII back to a character
    } else if (currentChar >= 65 && currentChar <= 90) {
      // UpperCase
      let shiftedChar = currentChar + shift;
      if (shiftedChar > 90) {
        shiftedChar -= 26;
      }
      cipherText += String.fromCharCode(shiftedChar);
    } else {
      cipherText += string[i];
    }
  }
  return cipherText;
}

function analyzeArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let num of array) {
    if (!Number.isInteger(num)) {
      return null;
    }
  }

  let result = {
    average: null,
    min: null,
    max: null,
    length: array.length,
  };

  result.average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  result.min = Math.min(...array);
  result.max = Math.max(...array);
  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
