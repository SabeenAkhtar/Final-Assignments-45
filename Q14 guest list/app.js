"use strict";
//Q14 - Guest List: If you could invite anyone, 
//living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// q 14
const guest_list = ['Sara', 'Ali', 'Zara', 'Irfan'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Sir/Mam ${guest_list[i]}! We are inviting you in party`);
}
