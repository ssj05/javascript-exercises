const removeFromArray = function(arr, ...n) {
  let newArray = [];
  arr.forEach((item) => {
    if (!n.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
