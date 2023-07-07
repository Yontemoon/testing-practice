

function caesarCipher (str, shift) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        let currentCode = ""
        let charCode = str.charCodeAt(i);
        let shiftedCode = charCode + shift;

        if (shiftedCode > 122 || (shiftedCode > 90 && charCode < 97)){
            currentCode = shiftedCode - 26;
        } else if ((shiftedCode < 97 && charCode >= 97) || (shiftedCode < 65 && charCode >= 65)) {
            currentCode = shiftedCode + 26;
        } else if ((charCode >= 97 && charCode <= 122) || charCode >= 65 && charCode < 90){
            currentCode = shiftedCode;
        } else {
            currentCode = charCode;
        }
        result += String.fromCharCode(currentCode);
    }
    return result;

}


module.exports = caesarCipher;