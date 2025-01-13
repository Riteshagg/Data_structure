// bubble sort with a two -pointer technique
// time complexity: O(n^2)-worst, O(n)-best if array is sorted
// i is the outer loop, j is the inner loop where i is always sorted from end of the array after each iteration
// if j element is heigher than the element at j+1, swap them.
function bubbleSort(arr,len){
   for(let i=0;i<len;i++){
        let temp;
        let swappping = false // if no swappping happens in a pass, the array is sorted
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swappping = true;
            }
        }
        if(!swappping){
            break;
        }
    }
    return arr;
}

function recursiveBubbleSort(arr,len){
    if(len==1){
        return arr;
    }
    let temp;
    let swapping = false;
    for(i=0;i<len-1;i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swapping=true;
        }
    }
    if(!swapping){
        return arr;
    }
    return recursiveBubbleSort(arr,len-1)
}

// selection sort with two -pointer technique
// time complexity: O(n^2)-word or best both same
// i is the outer loop, j is the inner loop where i is always sorted from start of the array after each iteration
// compare i elemnt with each j elements if i is the smallest element in the unsorted j of the array and swap it;
function selectionSort(arr,len){
    for(let i=0;i<len;i++){
        let minIndex = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;

}

function recursiveSelectionSort(arr,len,start=0){
    if(start == len-1){
        return arr;
        }
        let minIndex = start;
        for(let i=start+1;i<len;i++){
        if(arr[i]<arr[minIndex]){
            minIndex = i;
        }
     }
     let temp = arr[start];
     arr[start]=arr[minIndex];
     arr[minIndex] = temp;
     return recursiveSelectionSort(arr,len,start+1);
}

// insertion sort
// time complexity: O(n^2)-worst and best both same
// the first elemnt is always sorted and compare rest element with sorted array 
// if next element(current elemnt) is smaller than the sorted array then shift the sorted array to the right and insert the next element
function insertionSort(arr,len){
    for(i=1;i<len;i++){
        let currentElm = arr[i];
        let insertedElm = i;
        // compare the current element with the sorted array
        for(j=i-1;j>=0;j--){

            // if the current element is smaller than the sorted array then shift the sorted array to the right
            if(arr[j]>currentElm){
                arr[j+1] = arr[j];
                insertedElm = j;
            }else{
                break;
            }

        }
        arr[insertedElm] = currentElm;
    }
    return arr;
}

//console.log(insertionSort([7,12,9,11,3],5))