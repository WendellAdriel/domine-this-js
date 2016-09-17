var CONFIG = {
  host : 'https://google.com',
};

var name = 'Peter';

function init() {
  var name = 'Wendell';
  CONIF.name = name;
  console.log(CONFIG, name); // prints CONFIG and Wendell
}

console.log(CONFIG); // CONFIG.name = Wendell
console.log(name); // prints Peter
name = 'Wendell';
console.log(CONFIG); // CONFIG.name = Wendell
console.log(name); // prints Wendell

init();
