function findLowestValue(array){
    let minVal = array[0];
   for(i in array){
    if(array[i] < minVal){
        minVal = array[i];
    }
   }
   return minVal;
}
// console.log(this.findLowestValue([2,5,6,1,3]))