/*Q43 - Unchanged Magicians: Start with your work from Exercise 42.
Call the function make_great() with a copy of the array of magicians’
 names. Because the original array will be unchanged, return the new array
  and store it in a separate array. Call show_magicians() with each array
   to show that you have one array of the original names and one array with
    the Great added to each magician’s name.*/


let magician: string[]=["Bangali Baba", "Ramo kali", " Kali devi"];
 //function for coopy array 
function copyarray ( arr: string []){
    return [...arr]
}

function make_great( magician : string[]){
    for (let i = 0; i < magician.length; i++){
      magician[i] = magician[i] + " the Great"
    }
          console.log(magician);
      }



function show_magicians(magician: string []){
    magician.forEach(Element => {
        console.log(Element);
    })
} 

const coppyMagicionArray = copyarray(magician);
make_great(coppyMagicionArray);
console.log('\n\nThis is Orignal array');
show_magicians(magician);
console.log('\n\nThis is modified copy  array');
show_magicians(coppyMagicionArray);