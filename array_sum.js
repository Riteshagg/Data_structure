function findArraySum(array){
    let sum = 0;
    for(i in array){
        sum += array[i];
    }
    return sum;
}
//console.log(findArraySum([1,2,3,4,5]))