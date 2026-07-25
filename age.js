const age=Number(process.argv[2]);
if (age >=20) {
    console.log("Adult");
} 
else if (age >= 13) {
     console.log("Teen");

}
else {
    console.log("Child");
}