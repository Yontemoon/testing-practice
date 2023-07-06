const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');

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
    expect(reverseString(12345)).toBe(54321);
});