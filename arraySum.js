//for loop

let sum = [1,2,2,3,4,5];
let arraySum = 0;
for(let i=0; i < 6 ; i++) { 
    arraySum = arraySum +sum[i];
    
}
console.log(arraySum);

//while Loop
let i=0;
while(i<sum.length){
    arraySum = arraySum +sum[i];
    i++;
}
console.log(arraySum);