// In DSA, “Max / Most Consecutive Ones” means:

// Find the largest number of continuous 1s in an array / binary array.

// Example:

// arr = [1, 1, 0, 1, 1, 1]

// Here:

// First streak → 1,1 → count = 2
// Second streak → 1,1,1 → count = 3

// So answer = 3

// Simple logic

// Traverse array and keep 2 variables:

// count → current consecutive 1s
// maxCount → maximum found so far

// Rule:

// If element is 1 → count++
// If element is 0 → reset count = 0
// Update maxCount

//! Approach 1  with Math.max()

var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }

  maxCount = Math.max(currCount, maxCount);
};

//! Approach 2  without in-built Math.max()

