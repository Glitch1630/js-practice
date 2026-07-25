
const argument=(process.argv[2]);
const age =Number(argument.split("=")[1]);//store input as an array [1] tells the argument to take the second value in the array and convert it to a number first one is the"age"
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;
console.log("Birth year is :", birthYear);
