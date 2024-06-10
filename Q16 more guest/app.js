"use strict";
/*Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.
*/
const guest = ['Sara', 'Ali', 'Zara', 'Kamran',];
guest[2] = "Akhtar";
for (let i = 0; i < guest.length; i++) {
    //console.log(`Dear ${guest[i]}! \nyou are invited in dinner\n`)
    // console.log(` Note: Mr ${guest[2]} will not comming for  dinner\n`);
}
console.log('\nNote: Now we have more space so inviting more guest\nThanks');
guest.unshift("Sabeen");
guest.splice(2, 0, "Hina");
guest.push("Zubair");
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear! ${guest[i]}, You are invited for dinner.\n`);
}
