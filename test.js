const nums = [14, 7, 3, 12, 1, 9, 11, 1, 6, 8, 2, 0];
const asc = [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100];

// const mergeSort = (arr, half = arr.length / 2) => {
//   if (arr.length < 2) return arr;

//   const left = arr.splice(0, half);
//   const right = arr;

//   const joiner = (left, right) => {
//     let sorted = [];

//     while (left.length && right.length) {
//       left[0] > right[0]
//         ? sorted.push(right.shift())
//         : sorted.push(left.shift());
//     }

//     return sorted.concat(left, right);
//   };

//   return joiner(mergeSort(left), mergeSort(right));
// };

// console.log(mergeSort(nums));

// const bubbleSort = (arr) => {
//   let sorted;

//   do {
//     sorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         sorted = false;
//       }
//     }
//   } while (sorted == false);

//   return arr;
// };

// console.log(bubbleSort(nums));

// const quickSort = (arr, pivot = arr.pop()) => {
//   if (!pivot) return [];

//   let left = [];
//   let right = [];

//   arr.forEach(el=>{
//       el > pivot ? right.push(el) : left.push(el)
//   })

//   return quickSort(left).concat(pivot,quickSort(right))
// };

// console.log(quickSort(nums));

// const iterativeMerge = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] === undefined) {
//       arr[i] = [arr[i]];
//     } else {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//       arr.splice(i, 2, [arr[i], arr[i + 1]]);
//     }
//   }

//   while (arr.length > 1) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j + 1] !== undefined) {
//         let sorted = [];
//         while (arr[j].length && arr[j + 1].length) {
//           if (arr[j][0] > arr[j + 1][0]) {
//             sorted.push(arr[j + 1].shift());
//           } else {
//             sorted.push(arr[j].shift());
//           }
//         }
//         let all = sorted.concat(arr[j], arr[j + 1]);
//         arr.splice(j, 2, all);
//       }
//     }
//   }
//   return arr[0];
// }

// console.log(iterativeMerge(nums));

const iterativeBinary = (arr, x) => {
  let [start, end] = [0, arr.length - 1];
  let mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) return mid;

    if (x > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return arr[start] == x ? start : -1;
};

console.log(iterativeBinary(asc, 69));
