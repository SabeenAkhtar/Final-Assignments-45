/*Q23 - Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test.
 Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
Look closely at your results, and make sure you understand why each line evaluates to True or False.
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car = 'subaru';
// test 1 equality comparison
console.log(" Is car == 'subbaru' ? I predict True.");
console.log( car == 'subaru'); //true
// test 2 Strict equality comparison 
console.log(" Is car === 'subbaru' ? I predict True.");
console.log( car === 'subaru'); //true
// test 3 Inequality comparison 
console.log(" Is car !='subbaru' ? I predict False.");
console.log( car != 'subaru'); //false
// test 4 Strict  Inequality comparison 
console.log(" Is car !=='subbaru' ? I predict False.");
console.log( car !== 'subaru'); //false
// test 5 less than   comparison (false)
console.log(" Is car <'subbaru' ? I predict False.");
console.log( car < 'subaru'); //false lexicographic comparison
// test 6  greator than   comparison (false)
console.log(" Is car >'subbaru' ? I predict False.");
console.log( car > 'subaru'); //false lexicographic comparison
// test 7  less than or equal    comparison (true)
console.log(" Is car <='subbaru' ? I predict true.");
console.log( car <= 'subaru'); //true comparison
// test 8  greator than or equal    comparison (true)
console.log(" Is car >='subbaru' ? I predict True.");
console.log( car >= 'subaru'); //true comparison
// test 9  checking truthness    comparison (true)
console.log(" Is car >='subbaru' ? I predict true.");
console.log (car);// 'subaru'); //true comparison
// test 10  checking truthness    comparison (False)
console.log(" Is !car?  I predict False.");
console.log (!car);// 'subaru'); //false comparison