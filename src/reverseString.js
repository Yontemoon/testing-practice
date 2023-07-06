function reverseString(str) {
    if (typeof str === 'number') {
        str = str.toString()
    }
    return str.split('').reverse().toString().replaceAll(",", "");
}

module.exports = reverseString;
