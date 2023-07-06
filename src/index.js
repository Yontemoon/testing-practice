module.exports = capitalize;
module.exports = reverseString;


function capitalize(str) {
    let firstWord = str.split('').shift().toUpperCase()
    return firstWord + str.slice(1)
}

function reverseString(str) {
    return str.split('').reverse().toString().replaceAll(",","");
}

console.log(reverseString('weeeeee'))