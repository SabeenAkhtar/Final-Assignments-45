/*Q39 - City Names: Write a function called city_country() that 
takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city : string , country : string) : string{
     return `"${city}, ${country}"`
 
}
 // calling function
 console.log( city_country( " London" , "UK"));
 console.log( city_country( " New york" , "USA"));
 console.log( city_country( " Dubai" , "UAE"));
 console.log( city_country( " Istambol" , "Turkey"));