function capitalize(str) {
    let firstChar = str.substring(0, 1);

    return (firstChar.toUpperCase() + str.substring(1));
}

function reverseString(str) {
    let strArr = Array.from(str);
    strArr.reverse();

    return strArr.join("");
}

const Calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    return {add, subtract, multiply, divide}
})();

function caesarCipher(str, shift) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    str = Array.from(str);
    let encryptedStr = []
    str.forEach((char) => {
        if(char === " ") encryptedStr.push(" ");
        else {
            char = char.toUpperCase();
            let  index = alphabet.findIndex((alphabetChar) => alphabetChar === char.toString());
            encryptedStr.push(alphabet[(index + shift) % alphabet.length]);
        }

    })
    return encryptedStr.join("");
} 

function analyzeArray(arr) {
    const avg = Math.floor(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
    const sorted = arr.sort((a, b) => a - b)
    const min = sorted[0];
    const max = sorted[arr.length - 1];

    return {
        average: avg,
        min: min,
        max: max,
        length: arr.length,
    };
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };