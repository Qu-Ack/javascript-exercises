const reverseString = function(word) {
     let splitString = word.split("")
     let reverseString = splitString.reverse();
     let result = reverseString.join("");
     return result;
};

// Do not edit below this line
module.exports = reverseString;
