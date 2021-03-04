// Object literals
// const brad = {
//   name: 'Brad',
//   age: 30
// }

// console.log(brad);
// console.log(brad.age)

// Object constractor
// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  this.getFullName = function () {
    return `User ${this.firstName} ${this.lastName} is ${this.calculateAge()}`;
  }

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// this - window object
// console.log(this);
// const brad = new Person('Brad', 19);
// const john = new Person('John', 45);
// console.log(`User ${brad.name} is ${brad.age}`);
// console.log(`User ${john.name} is ${john.age}`);

const brad = new Person('Brad', 'Kowalski', '9-10-1990');
const john = new Person('John', 'Watson', '10-1-1943');
const greg = new Person('Greg', 'Super', '2-5-1995');
const clark = new Person('Clark', 'Kent', '11-11-1960');

console.log(brad.getFullName());
console.log(john.getFullName());
console.log(greg.getFullName());
console.log(clark.getFullName());