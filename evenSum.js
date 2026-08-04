function getEvenSum(arr){
    let evenSum=0;
    for (const num of arr){
        if (num%2==0){
            evenSum=evenSum+num; 
        }
    }
    return evenSum;
}
console.log(getEvenSum([1,2,3,4,5,6,7,8,9,10]));