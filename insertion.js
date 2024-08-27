function insertionSort(arr) {
    // Start from the second element (assume the first element is sorted)
    for (let i = 1; i < arr.length; i++) {
        // Current element to be inserted
        let curr = arr[i];
        let j = i - 1;

        // Shift elements of arr[0...i-1] that are greater than curr to one position ahead
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }

        // Insert curr into its correct position
        arr[j + 1] = curr;
    }

    return arr;
}


console.log(insertionSort([3, 15, 20, 4, 12]));
module.exports = insertionSort;
