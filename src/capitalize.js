function capitalize(str) {
    let firstWord = str.split('').shift().toUpperCase();
    return firstWord + str.slice(1);
}

module.exports = capitalize;
