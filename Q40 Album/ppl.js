"use strict";
/*Q40 - Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return
 a Object containing these two pieces of information. Use the function to make three
  dictionaries representing different albums. Print each return value to show that
   Objects are storing the album information correctly. Add an optional parameter
   to make_album() that allows you to store the number of tracks on an album.
   If the calling line includes a value for the number of tracks, add that value
   to the album’s Object. Make at least one new function call that includes
    the number of tracks on an album.
*/
function make_album(artistname, albumtitle) {
    return { artistname, albumtitle };
}
let firstalbum = make_album("Ali", "Dosti");
let secondalbum = make_album("Fahad", "Rang e Muhubat");
let thirdalbum = make_album("Saad", "Zindage");
console.log(firstalbum);
console.log(secondalbum);
console.log(thirdalbum);
function make_album1(artistname, albumtitle, numberoftrack) {
    return { artistname, albumtitle, numberoftrack };
}
let firstalbum1 = make_album1("Ali", "Dosti", 25);
let secondalbum2 = make_album1("Fahad", "Rang e Muhubat", 20);
let thirdalbum3 = make_album1("Saad", "Zindage");
console.log(firstalbum1);
console.log(secondalbum2);
console.log(thirdalbum3);
