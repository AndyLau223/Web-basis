const hobbies = ['Sprots', 'Cooking']; // a pointer to the array is stored.
const age = 32; // the value itself is stored.

hobbies.push('Reading'); // the address of the array doesn't change

hobbies = ['Coding', 'Sleeping']; // not allowed! 


// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects


const person = { age: 32};

// here we passed "Reference" of an object.
function getAdultYears(person) {
    person.age -=18;
    return person.age;
}

console.log(getAdultYears(person));
console.log(person);

