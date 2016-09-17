var wendell = 'Wendell';

console.log(peter); // undefined (if we delete line 6, it will show an ERROR and not undefined)
console.log(wendell); // Wendell

var peter = 'Peter';

var person = { name : 'Wendell' };

sayMyName(person); // SUCCESS

function sayMyName(person) {
  console.log(person.name);
}
