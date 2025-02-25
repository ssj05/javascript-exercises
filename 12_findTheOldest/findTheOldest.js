const findTheOldest = function (people) {
  let obj = {};
  let age = 0;
  people.forEach((person) => {
    if (typeof person.yearOfDeath === "undefined") {
      if (new Date().getFullYear() - person.yearOfBirth > age) {
        age = new Date().getFullYear() - person.yearOfBirth;
        obj = person;
      }
    } else {
      if (person.yearOfDeath - person.yearOfBirth > age) {
        age = person.yearOfDeath - person.yearOfBirth;
        obj = person;
      }
    }
  });
  return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
