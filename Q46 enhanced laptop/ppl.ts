/*Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties 
make, model, year, and a method describe() that logs a sentence about the laptop.*/



let laptop = {
    name: "Sony",
    model: " I17 Gen 10",
    year: 2024,
    describe: function(){
        console.log(` This laptop is letest, ${ this.year} brand name ${this.name} and the model is ${this.model}.`)
    }


};
laptop.describe();
