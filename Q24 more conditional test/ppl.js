"use strict";
/*Q24 - More Conditional Tests: You don’t have to limit
 the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least
one True and one False result for each of the following:
Tests for equality and inequality with strings
Tests using the lower case function
Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
Tests using "and" and "or" operators
Test whether an item is in a array
Test whether an item is not in a array*/
let car = 'subaru';
let age = 25;
let numbers = [1, 2, 3, 4,];
// STRING TEST
// test 1 quality comparison true
console.log(" Is car == 'subbaru' ? I predict True.");
console.log(car == 'subaru'); //true (case insensitive)
// test 2 strict  equality comparison false
console.log(" Is car === 'subbaru' ? I predict False.");
console.log(car === 'subaru'); //False (case sensitive)
// test 3 Inequality comparison true
console.log(" Is car !='Suzuki' ? I predict true.");
console.log(car != 'Suzuki'); //true
// test 4   Inequality comparison false
console.log(" Is car !=='subbaru' ? I predict False.");
console.log(car !== 'subaru'); //false (case sensitive)
// LOWERCASE TEST
// test  4 Lower case conversion True
console.log(" Is car.toLowerCase() =='subbaru' ? I predict True.");
console.log(car.toLocaleLowerCase() == 'subaru'); //trye  (converted into lowercase)
// test 5   Lower case conversion false
console.log(" Is car === car.toLocaleLowerCase()?I predict False.");
console.log(car === car.toLocaleLowerCase()); //false (orignal value remains upprcase)
//NUMERICAL TEST
// Test 7 Equality test true
console.log('Is age == 25? I predict True');
console.log(age == 25); // True
// Test 8 inequality test false
console.log('Is age != 30? I predict False');
console.log(age == 30); //  False
// Test 9 Greator thean (True)
console.log('Is age > 30? I predict True');
console.log(age > 30); // True
// Test 10 less than or equal  test false
console.log('Is age <= 30? I predict False');
console.log(age <= 25); //  False
//LOGICAL OPERATORS
// Test 11 AND (True)
console.log('Is age > 20 && age < 30? ? I predict True');
console.log(age > 20 && age < 30); // True 9both condition meet)
// Test 12  OR test false
console.log('Is age > 30 || age < 18? I predict False');
console.log(age > 30 || age < 18); //  False (neither condition met)
// ARRAY TEST
// Test 13 in array (true)
console.log("Is 5 in number ? I predict True.");
console.log(3 in numbers); // true (checker for indes existence)
// Test 14 not in arry
console.log("Is 7  not in number ? I predict True.");
console.log(7, not in numbers); // true (checker for indes existence)
