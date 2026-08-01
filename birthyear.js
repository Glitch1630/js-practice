function getBirthYear(age){
    const currentYear = new Date().getFullYear();
    return (currentYear - age);
}
const age=Number(process.argv[2].split("=")[1]);
//store input as an array [1] tells the argument to take the second value in the array and convert it to a number first one is the"age"
const birthYear=getBirthYear(age);
console.log("Birth year is :", birthYear);
