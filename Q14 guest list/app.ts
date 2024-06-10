//Q14 - Guest List: If you could invite anyone, 
//living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

// q 14
const guest_list: string[]=[ 'Sara', 'Ali', 'Zara', 'Irfan'];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Mam ${guest_list[i]}! We are inviting you in party`);
}
 
/* q 14 another methguest.map
guest_list.map((i)=>{
    console.log( `Dear ${[i]}! I would like to invite you in party `)

})*/
   export{guest_list}