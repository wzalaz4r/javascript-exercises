const palindromes = function (text) {
    text = text.toLowerCase();
    function returnPalindrome(text) {
        text = text.split("");
        // .join("").split(",").join("").split("")
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) {
                newText += text[i];
            }
        }
        return newText;
    }
    return returnPalindrome(text) === text;
};

palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
