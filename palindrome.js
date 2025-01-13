function findPalindrome(param){
    let oldArray = param.toString().split('');
    let newArray = [];
    for(i=(oldArray.length-1);i>=0;i--){
        newArray.push(oldArray[i]);
    }
    if(oldArray.join(',') === newArray.join(',')){
        return true;
    }
    return false;
}

// console.log(findPalindrome("2443"))