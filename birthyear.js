const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter your age :",function(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - Number(age);
    console.log("Birth year is :", birthYear);
    rl.close();
});

