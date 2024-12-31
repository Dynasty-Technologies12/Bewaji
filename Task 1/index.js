function multiply(x, y) {
    return x * y;
}
 
let result = multiply(7, 9);
console.log(result);



function describePerson(name, age=36)   {
    return(`${name}, is ${age} years old`)
}

let person = describePerson('Shola', 36);
console.log(person);



function largestNumber(x,y,z) {
    return Math.max(x, y, z);
}

let outcome = largestNumber(5, 7, 3);
console.log(outcome);


function isLeapYear(year) {
    return(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0);
}

let Year = isLeapYear(1957);
console.log(Year);


function concatStrings(name, location) {
    return (`${name}, ${location}`)
}

let strings = concatStrings("Adeola", "Oyingbo");
console.log(strings);

