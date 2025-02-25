const palindromes = function (str) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((char) => alphanumeric.includes(char))
    .join("");

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
