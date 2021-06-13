const nums = [14, 7, 3, 12, 1, 9, 11, 1, 6, 8, 2, 0];
const asc = [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100];
let first = [-2, -1, 3, 5, 6, 8];
let second = [0, 1, 2, 5, 9];

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

// const binarySearch = (arr, x) => {
//   let half = Math.floor((arr.length - 1) / 2);
//   let midVal = arr[half];

//   if (midVal == x) return half;

//   while (half >= 0) {
//     if (midVal > x) {
//       let left = arr.slice(0, half);
//       return binarySearch(left, x);
//     } else {
//       let right = arr.slice(half + 1);
//       let bin = binarySearch(right,x)
//       return bin == -1 ? bin : half + 1 + bin;
//     }
//   }

//   return -1
// };

// console.log(binarySearch(asc, 12));

// const iterativeBinary = (arr, x) => {
//   let [start, end] = [0, arr.length - 1];
//   let mid;

//   while (start < end) {
//     mid = Math.floor((start + end) / 2);
//     if (arr[mid] == x) return mid;

//     if (x > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return arr[start] == x ? start : -1;
// };

// console.log(iterativeBinary(asc, 69));

// function twoArr(arr1, arr2, k) {
//   let sorted = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] > arr2[0]) {
//       sorted.push(arr2.shift());
//     } else {
//       sorted.push(arr1.shift());
//     }
//   }
//   let all = sorted.concat(arr1, arr2);
//   return all[all.length-k];
// }

// let efficienTwo = (arr1, arr2, k) => {
//   let total = arr1.length + arr2.length;
//   let stop = total - k;
//   let i = 0;
//   let j = 0;
//   let current;

//   while (i + j <= stop) {
//     if (i < arr1.length && j < arr2.length) {
//       if (arr1[i] > arr2[j]) {
//         current = arr2[j];
//         j++;
//       } else {
//         current = arr1[i];
//         i++;
//       }
//     } else {
//       if (i == arr1.length) {
//         current = arr2[j];
//         j++;
//       } else {
//         current = arr1[i];
//         i++;
//       }
//     }
//   }
//   return current;
// };

// console.log(efficienTwo(first, second, 4));

const subArr = (arr) => {
  let highNum;
  let highSeq;
  let curNum;
  let current = [];

  for (let i = 0; i < arr.length; i++) {
    current = [arr[i]];
    curNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      curNum += arr[j];
      current.push(arr[j]);
      if (curNum > highNum || highNum == undefined) {
        highNum = curNum;
        highSeq = [...current]
      }
    }
  }

  return highSeq;
};

console.log(subArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
