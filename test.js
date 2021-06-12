const nums = [14, 7, 3, 12, 9, 11, 6, 8, 2];

const mergeSort = (arr, half = arr.length / 2) => {
  if (arr.length < 2) return arr;

  const left = arr.splice(0, half);
  const right = arr;

  const joiner = (left, right) => {
    let sorted = [];

    while (left.length && right.length) {
      left[0] > right[0]
        ? sorted.push(right.shift())
        : sorted.push(left.shift());
    }

    return sorted.concat(left, right);
  };

  return joiner(mergeSort(left), mergeSort(right));
};

// console.log(mergeSort(nums));

const bubbleSort = (arr) => {
  let sorted;

  do {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  } while (sorted == false);

  return arr
};

// console.log(bubbleSort(nums));
