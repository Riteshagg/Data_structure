function removeDuplicateFromUnsorted(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // first: using includes() method
        // if (!result.includes(array[i])) {
        //     result.push(array[i]);
        //     }

        // second: using indexOf() method
        // if (result.indexOf(array[i]) === -1) {
        //     result.push(array[i]);
        //     }

        // third: using find() method
        // if(!result.find((item)=>{return item === array[i]})){
        //     result.push(array[i]);
        // }

        // fourth: using custom method
        if(result.length === 0){
            result.push(array[i]);
        }else{
            let isExist = false;
            for(j=0;j<result.length;j++){
                if(result[j]===array[i]){
                    isExist = true;
                    break;
                }
            }
            if(isExist===false){
                result.push(array[i]);
            }
        }
    }
    return result;
}

function removeDuplicateFromSorted(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(result.length==0 || result[result.length-1] != array[i]){
            result.push(array[i]);
        }
    }
    return result;
}

//console.log(removeDuplicateFromSorted([1,1,2]))