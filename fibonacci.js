function fSeries(num){
    if(num<=1){
        return num;
    }
    else{
        return fSeries(num-1)+fSeries(num-2)
    }
}

// for(i=0;i<10;i++){
//     console.log(fSeries(i))
// }