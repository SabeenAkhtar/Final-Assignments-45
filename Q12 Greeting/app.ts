//Q12 - Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name,
// print a message to them. 
//The text of each message should be the same, 
//but each message should be personalized with the person’s name.


let friends: string[] = ['sara', 'Saba','Ali','Baya'];
    let message: string = `Tommorow is my Birthday you are invited my dear  `; 
for(let i=0; i<friends.length; i ++){
    console.log(message + friends[i]);
}
