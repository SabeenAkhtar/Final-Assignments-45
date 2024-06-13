/*Q47- Array Destructuring: Given an array of objects representing different laptops,
 each with properties make, model, and year, use array destructuring to assign
  the first and second laptops to variables. Then, log these variables*/

  let laptop = [
    {  make: " Sony",  model: " I7",  year: 2024  },
    {  make: " Accer",  model: " I5",  year: 2023  },
    {  make: " Dell",  model: " I4",  year: 2022  },
    {  make: " SHp",  model: " I7",  year: 2025  },
  ];

  let [laptop1 , laptop2, laptop3      ] = laptop;
  console.log(laptop1);
  console.log(laptop2);
  console.log(laptop3);