const palindromes = function (word) {
    const palCheck = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return palCheck === palCheck.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
