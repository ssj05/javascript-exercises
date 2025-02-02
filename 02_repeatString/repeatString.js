const repeatString = function(word, length) {
  if (length < 0) {
    return "ERROR";
  }
  let repeatWord = "";
  for (let i = 0; i < length; i++) {
    repeatWord += word;
  }
  return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
