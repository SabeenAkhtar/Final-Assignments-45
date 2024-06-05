
// Q6 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. 

let PersonName : string = `\n\t SABEEN AKHTAR \t\n`;
console.log(PersonName);
let stripped : string = PersonName.trim();
console.log(stripped);



