const wendell = 'Wendell'; // Pointer can't be reassigned
console.log(wendell); // Wendell
wendell = 'Adriel'; // ERROR - we can't change the pointer of the const variable (primitive values like string, number)

const person = { name : 'Wendell' }; // Object
person = { name : 'Adriel' }; // ERROR - the pointer can't be reassigned
person.name = 'Adriel'; // SUCCESS - same pointer of the person const, we are only changing an attribute of the object that is another pointer

const peter = person; // peter object has the name Adriel because its pointing to person pointer
peter.lastName = 'Silva';

console.log(peter); // name = Adriel; lastName = Silva
console.log(person); // name = Adriel; lastName = Silva
