function reverseString(str) {
    // if(typeof str === 'number') {
    //     console.log(typeof str)
    // }
    return str.split('').reverse().toString().replaceAll(",", "");
}

console.log(reverseString(12345))
module.exports = reverseString;
