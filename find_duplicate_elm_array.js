function duplicateElmFromUnsorted(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {

            // check array[i] is exist in array[j]. if is true then replace isExist=false to true;
            let isExist = false;
            for (let j = (i+1); j < array.length; j++) {
                if(array[j]==array[i]){
                    isExist = true;
                    break;
                }
            }
            // if: result length === 0 && isExist === true then push into result
            if(result.length ===0 && isExist === true){
                result.push(array[i]);
            }

            // otherwise: check if array[i] value is exist in result array then avoid to push again. otherwise push into result array
            if(isExist==true){
                let isExistInResult = false;
                for(let k = 0; k < result.length; k++){
                    if(result[k]===array[i]){
                        isExistInResult = true;
                    }
                }
                if(isExistInResult==false){
                    result.push(array[i]);
                }
            }
            
    }
    return result;
}

function duplicateElmFromSorted(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i]==array[i+1] && (result.length==0 || result[result.length-1]!=array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

//console.log(duplicateElmFromSorted([1,1,1,2,2,2,3,4,4,5,5]));

//console.log(duplicateElmFromUnsorted([1,1,1,2,3,1,2,3,2,1,4,8,8]))