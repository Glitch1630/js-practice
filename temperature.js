const  readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the celsius: ",function(celsius){
   const fahrenheit=(celsius *9/5)+32;
    console.log(fahrenheit + "°F") 
    rl.close();
});
