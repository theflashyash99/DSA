// Merge Sorted Array is another classic array problem on LeetCode.

// Problem

// You’re given two sorted arrays and need to merge them into one sorted array.

// Classic version:

// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],         n = 3

// Here:

// First m elements of nums1 are valid → [1,2,3]
// nums2 has n valid elements → [2,5,6]
// Extra zeros in nums1 are just empty space

// Output:

// [1,2,2,3,5,6]
// Best approach — Three Pointers (from end)

// Why from end?

// Because if you start from front, you overwrite values in nums1.

// Use:

// i = m - 1 → last valid element of nums1
// j = n - 1 → last element of nums2
// k = m + n - 1 → last index of nums1





var merge = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};
