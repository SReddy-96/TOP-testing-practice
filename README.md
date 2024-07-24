# Testing Practice - The Odin Project

## Project Overview

This project focuses on implementing Test-Driven Development (TDD) practices using Jest. The assignment involves writing tests for given function ideas before implementing the functions themselves, emphasizing the importance of thorough testing in software development.

## Challenges and Solutions

- Testing for `null` returns: Implemented Jest's `toBeNull()` matcher.
- Accessing character ASCII codes: Utilized JavaScript's `charCodeAt()` method.
- Converting ASCII to characters: Applied `String.fromCharCode()` method.
- Verifying function return types: Used `typeof` operator and Jest's `toEqual` matcher.

## Skills Developed

- Using Jest matchers like `toBeNull()` for robust input validation.
- Applying `charCodeAt()` to obtain ASCII values of characters.
- Converting ASCII numbers to characters with `String.fromCharCode()`.
- Employing `typeof` and `toEqual` for type checking and equality testing.

## Reflections

As my first experience with Jest, I initially felt apprehensive about implementing these tests and understanding their necessity. However, through hands-on practice and in-depth research, I realized the crucial importance of code testing. It ensures functions return exactly what we intend, and with such ease.

Jest proved to be remarkably simple to integrate into my codebase. Its extensive array of matchers facilitated easy setup of individual unit tests, allowing precise matching of function outputs to expected results.

## How to Use

1. Clone the repository:
   ```
   git clone https://github.com/SReddy-96/TOP-testing-practice.git
   ```

2. Navigate to the project directory:
   ```
   cd TOP-testing-practice
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the tests:
   ```
   npm test
   ```

Feel free to explore the code and run the unit tests against the implemented functions!