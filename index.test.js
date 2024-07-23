const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index.js");

// capitalize

test("capitalize not a string", () => {
  expect(capitalize("")).toBeNull();
});

test("capitalize works", () => {
  expect(capitalize("steven")).toMatch(/Steven/);
});

test("capitalize is not a string", () => {
  expect(capitalize(10)).toBeNull();
});

// Reverse String
test("Reverse String not a string", () => {
  expect(reverseString()).toBeNull();
});

test("Reverse String is correct", () => {
  expect(reverseString("steven")).toMatch(/nevets/);
});

test("Reverse String is not a string", () => {
  expect(reverseString(10)).toBeNull();
});

// Calculator
test("calculator add not a number", () => {
  expect(calculator.add("steven")).toBeNull();
});
test("calculator subtract not a number", () => {
  expect(calculator.subtract("steven")).toBeNull();
});
test("calculator divide not a number", () => {
  expect(calculator.divide("steven")).toBeNull();
});
test("calculator multiply not a number", () => {
  expect(calculator.multiply("steven")).toBeNull();
});

test("calculator add no argument", () => {
  expect(calculator.add()).toBeNull();
});
test("calculator subtract no argument", () => {
  expect(calculator.subtract()).toBeNull();
});
test("calculator divide no argument", () => {
  expect(calculator.divide()).toBeNull();
});
test("calculator multiply no argument", () => {
  expect(calculator.multiply()).toBeNull();
});

test("calculator add is correct", () => {
  expect(calculator.add(6, 2)).toEqual(8);
});
test("calculator subtract is correct", () => {
  expect(calculator.subtract(6, 2)).toEqual(4);
});
test("calculator divide is correct", () => {
  expect(calculator.divide(6, 2)).toEqual(3);
});
test("calculator multiply is correct", () => {
  expect(calculator.multiply(6, 2)).toEqual(12);
});

// caesar Cipher
test("Cipher has no Arguments", () => {
  expect(caesarCipher()).toBeNull();
});

test("Cipher is wrapping from z - a", () => {
  expect(caesarCipher("xyz", 3)).toMatch(/abc/);
});

test("Cipher handles upper and lower case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("All non alphabetical characters are unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// Analyze Array
test("analyzeArray argument is not an array", () => {
  expect(analyzeArray()).toBeNull();
});

test("analyzeArray argument is not an array of numbers", () => {
  expect(analyzeArray(["one", "two", "three", "four"])).toBeNull();
});

test("analyzeArray returns an Object", () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe("object");
});

test("analyzeArray average is correct", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
