//Q3 - Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

// Storing a person name in a variable
let PersonName: string = 'Sabeen Akhtar';

// printing person name in lovercase

console.log("Lowercase:", PersonName.toLowerCase());

// printing person name in Uppercase

console.log("UpperCase:", PersonName.toUpperCase());

// printing person name in TitleCase

console.log("TitleCase:", PersonName.replace(/\bw/g, c=> c.toLocaleUpperCase())
);
