const personObject = {
  name : 'Wendell',
  age : 24,
  talk : function (words) {
    console.log(this.name + ' says: ' + words);
  },
  olden : function (years) {
    this.age += years || 1;
    console.log(this);
  }
};

personObject.talk('Hello'); // Wendell says: Hello
personObject.olden(); // prints personObject object to console with age = 25
personObject.olden(5); // prints personObject object to console with age = 30

function Person (name, age) {
  this.name = name;
  this.age = age || 1;

  this.talk = function (words) {
    console.log(this.name + ' says: ' + words);
  };

  this.olden = function (years) {
    this.age += years || 1;
    console.log(this);
  };
};

const wendell = new Person('Wendell', 24);
console.log(wendell); // wendell is a Person object with the attributes name and age and the methods talk and olden

wendell.talk('Hello'); // Wendell says: Hello
wendell.olden(); // prints wendell object to console with age = 25
wendell.olden(5); // prints wendell object to console with age = 30

const peter = new Person('Peter', 30);
console.log(peter); // peter is a Person object with the attributes name and age and the methods talk and olden
