function findMaxValue(array){
    maxValue = array[0];
    for (i in array){
        if(array[i] >= maxValue){
            maxValue = array[i]
        }
    }
    return maxValue;
}

//console.log(this.findMaxValue([2,5,6,1,3,0]))