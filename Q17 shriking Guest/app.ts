/*Q17 - Shrinking Guest List: You just found out that your new dinner
 table won’t arrive in time for the dinner, and you have space for only two guests.
Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.
Remove guests from your list one at a time until only two names remain
 in your list. Each time you pop a name from your list, print a message to 
 that person letting them know you’re sorry you can’t invite them to dinner.
Print a message to each of the two people still on your list, letting them know
 they’re still invited.
Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/


 
/*const guest : string[]= ['Sara', 'Ali', 'Zara','Kamran',];
   guest[2]= "Akhtar";
for(let i=0; i<guest.length;i++){
//console.log(`Dear ${guest[i]}! \nyou are invited in dinner\n`)
    // console.log(` Note: Mr ${guest[2]} will not comming for  dinner\n`);
}
 console.log('\nNote: Now we have more space so inviting more guest\nThanks')
guest.unshift("Sabeen");
guest.splice(2,0, "Hina");
guest.push("Zubair");
for(let i=0; i< guest.length;i++){
    console.log(`Dear! ${guest[i]}, You are invited for dinner.\n`);
}
*/
 
const guest : string[]= ['Sara', 'Ali', 'Zara','Kamran',];
guest[2]= "Akhtar";
for(let i=0; i<guest.length;i++)
 {}

//console.log('\nNote: Now we have more space so inviting more guest\nThanks')
guest.unshift("Sabeen");
guest.splice(2,0, "Hina");
guest.push("Zubair");
for(let i=0; i< guest.length;i++)
  {}
//console.log(`Dear! ${guest[i]}, You are invited for dinner.\n`);}


 //17
//console.log("\n Sorry due to some issues we are invited only selected person.\n");
while(guest.length>2)
  {
  let rejectedGuest =  guest.pop()
 console.log(`Sorry , ${rejectedGuest}, We will invite you very soon. \n`);
}