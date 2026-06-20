// Given an array, move all 0s to the end while maintaining the order of non-zero elements.

// Example:

// [0,1,0,3,12]

// Output:

// [1,3,12,0,0]

var moveZeroes = function (nums) {
  // two pointer approach
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // for the remaining after non zero.
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
