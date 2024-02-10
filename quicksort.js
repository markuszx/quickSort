function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  const pivot = arr[arr.length - 1];
  // to store less then
  const leftArr = [];
  //and more then
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
      // every number larger (or equal) than the pivot is to the right
    } else {
      rightArr.push(arr[i]);
    }
  }

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];

}


module.exports = [quicksort];
