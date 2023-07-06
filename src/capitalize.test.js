const capitalize = require('./index');

test(`'Should return a string with the first word capitalized.'`, () => {
    expect(capitalize('weeeeee')).toBe('Weeeeee');
});


test(`'Should return a string with the first word capitalized.'`, () => {
    expect(capitalize('the dog is very big today.')).toBe('The dog is very big today.');
});

test(`'Should return a string with the first word capitalized.'`, () => {
    expect(capitalize('The dog is very big today.')).toBe('The dog is very big today.');
});