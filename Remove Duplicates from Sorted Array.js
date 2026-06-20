// Remove Duplicates from Sorted Array is another classic two-pointer problem on LeetCode.

// Problem Statement

// Given a sorted array, remove duplicates in-place such that each unique element appears only once.

// Return the number of unique elements k.

// Example:

// nums = [1,1,2]

// Output:

// 2

// Modified array:

// [1,2,_]

// (_ means ignore remaining elements)

// Why Sorted Array Matters

// Because duplicates are adjacent.

// Example:

// [1,1,2,2,3,3]

// Same numbers come together, making comparison easy.

// Approach — Two Pointer

// Use:

// i → scans array
// x → position for next unique element

var removeDuplicates = function (nums) {
  let x = 0; // acts as a pointer for uniques values

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1; // increase the index of the x;
      nums[x] = nums[i];
    }
  }
  return x + 1; // At the end, x + 1 gives the count of unique elements.
};
