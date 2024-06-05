// Storing a person name in a variable
var PersonName = 'Sabeen Akhtar';
// printing person name in lovercase
console.log("Lowercase:", PersonName.toLowerCase());
// printing person name in Uppercase
console.log("UpperCase:", PersonName.toUpperCase());
// printing person name in TitleCase
console.log("TitleCase:", PersonName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
