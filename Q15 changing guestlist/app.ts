//Q15 - Changing Guest List: You just heard that one of your guest
//s can’t make the dinner, so you need to send out a new set of 
//invitations. You’ll have to think of someone else to invite:
//Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the 
//name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who
 //can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for
// each person who is still in your list.
// Exercise 14 - Initial guest list

/*q 14
const guest_list: string[]=[ 'Sara', 'Ali', 'Zara', 'Irfan'];
//for(let i=0; i<guest_list.length; i++){
  //  console.log(`Dear Sir/Mam ${guest_list[i]}! We are inviting you in party`);
//}

// q 14 another methguest.map
guest_list.map((i)=>{
    console.log( `Dear ${[i]}! I would like to invite you in party `)

})*/

const  Guestindex: string []= ['Sara','Zara','Ali', 'Imran'];
console.log( `Due to some reasons, ${Guestindex[2]}  not able to come in party` );
Guestindex[2]= "KAMRAN";
for(let i=0; i<Guestindex.length ; i++){
    console.log(`Dear Sir/Mam ${Guestindex[i]}!  I would liike to invite you in party.`);
}
