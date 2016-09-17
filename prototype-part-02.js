function Person (name, age) {
  this.name = name;
  this.age = age || 1;
};

Person.prototype.talk = function (words) {
  console.log(this.name + ' says: ' + words);
};

Person.prototype.olden = function (years) {
  this.age += years || 1;
  console.log(this);
};

const wendell = new Person('Wendell', 24); // wendell is a Person object

function Man (name, age) {
  this.gender = 'male';
};

Man.prototype = new Person();

const peter = new Man('Peter', 30); // peter is a Man object that has the same attributes and methods of Person plus the gender attribute

Man.prototype.walk = function (steps) {
  console.log(this.name + ' walked ' + steps + ' steps!');
}

peter.walk(10); // Peter walked 10 steps!
wendell.walk(40); // ERROR - Now wendell doesn't have the walk method

console.log(peter.hasOwnProperty('age')); // false - peter is a man object, the age attribute is in his prototype that's pointing to the Person object

console.log(peter.age); // 30
delete peter.age;
console.log(peter.age); // 1 - WTF?? - because the prototype chain, when we ask for an attribute and it's not in the object the JS searchs the prototype to get the attribute
