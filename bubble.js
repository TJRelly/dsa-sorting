//swaps inplace
//time complextity O(n^2) space O(1) - the arr is sorted in place
function bubbleSort(arr) {
    //swaps indices
    const swap = (arr, idx, idx2) =>
        ([arr[idx], arr[idx2]] = [arr[idx2], arr[idx]]);
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) swap(arr, i, j)
        }
    }
    return arr;
}

console.log(bubbleSort([3, 15, 20, 4, 12]));
module.exports = bubbleSort;
