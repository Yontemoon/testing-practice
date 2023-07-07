const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const calculator = require ('./calculator.js');
const caesarCipher = require('./caesarCipher.js');

test(`Should return a string with the first word capitalized.`, () => {
    expect(capitalize('weeeeee')).toBe('Weeeeee');
});

test(`'Should return a string with the first word capitalized.`, () => {
    expect(capitalize('the dog is very big today.')).toBe('The dog is very big today.');
});

test(`Should return a string with the first word capitalized.`, () => {
    expect(capitalize('The dog is very big today.')).toBe('The dog is very big today.');
});

test('Reverses a string', () => {
    expect(reverseString('weeee')).toBe('eeeew');
});

test('Reverses a string', () => {
    expect(reverseString(12345)).toBe('54321');
});

test('calculates addition properly', () => {
    expect(calculator.add(10, 10)).toBe(20);
});

test('calculates subtraction properly', () => {
    expect(calculator.subtract(10, 10)).toBe(0);
});

test('calculates multipication properly', () => {
    expect(calculator.multiply(10, 10)).toBe(100);
});

test('calculates division properly', () => {
    expect(calculator.divide(10, 10)).toBe(1);
});

test('Caesar cipher is working properly.', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 9)).toBe('jklmnopqrstuvwxyzabcdefghi');
})

test('Caesar cipher is working properly.', () => {
    expect(caesarCipher('The dog is doing fine!', 9)).toBe('Cqn mxp rb mxrwp orwn!');
})


test('Caesar cipher is working properly.', () => {
    expect(caesarCipher('QUICK DO & ! = #', 12)).toBe('CGUOW PA & ! = #');
})

