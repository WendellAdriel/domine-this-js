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
  Person.call(this, name, age);
  this.gender = 'male';
};

Man.prototype = Person.prototype;

const peter = new Man('Peter', 30); // peter is a Man object that has the same attributes and methods of Person plus the gender attribute

Man.prototype.walk = function (steps) {
  console.log(this.name + ' walked ' + steps + ' steps!');
}

peter.walk(10); // Peter walked 10 steps!
wendell.walk(40); // Wendell walked 10 steps! - This is a problem, because we applied the walk method to the Man prototype and wendell is a Person object, this happens because of the code in line 22, the Man prototype is referencing the Person prototype, so any changes made to it is made in the Person prototype itself
