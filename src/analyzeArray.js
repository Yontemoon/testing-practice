
function analyzeArray(array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    };
    let previousElement = array[0];
    let sum = 0;
    array.forEach(element => {
        object.length++;
        sum += element;
        if (element >= previousElement) object.max = element;
        if (element <= previousElement) object.min = element;
        previousElement = element;
    });
    object.average = sum / object.length;

    return object;
}


console.log(analyzeArray([1,2,3,4,5]))

module.exports = analyzeArray;