// Problem Statement

// Given an array nums and a value val, remove all occurrences of val in-place and return the number of remaining elements.

// Example:

// nums = [3,2,2,3], val = 3

// Output:

// 2

// Because after removing 3, array becomes:

// [2,2]
// Approach — Two Pointer

// We use two pointers:

// i → traverses every element in array
// x → tracks where the next valid (non-val) element should be placed


var removeElement = function (nums, val) {
  let x = 0; //pointer to track the non-val element go.

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  return x;
};
