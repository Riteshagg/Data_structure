var lengthOfLongestSubstring = function(s) {
    if(s.length ===0){
        return 0;
    }
    let lastElm = s.charAt(0);
    let max = 1;
    let concatKey;
    for(i=1;i<s.length;i++){
        if((lastElm).indexOf(s.charAt(i))> -1){
                concatKey = (lastElm).slice(((lastElm).indexOf(s.charAt(i)))+1) + s.charAt(i);
        }else{
             concatKey = lastElm + (s.charAt(i))
        }
        if(concatKey.length >max){
            max = concatKey.length;
        }
        lastElm = concatKey
    }
    return max;
};

// console.log(lengthOfLongestSubstring(""))