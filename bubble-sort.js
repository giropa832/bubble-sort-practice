
function bubbleSort(arr) {
  let swap = false;

  // Iterate through the array
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {

      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {

        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    console.log(arr.join(","));
  } while (swap);
  // If you get to the end of the array and no swaps have occurred, return
  return arr;

  // Otherwise, repeat from the beginning
}

module.exports = bubbleSort;