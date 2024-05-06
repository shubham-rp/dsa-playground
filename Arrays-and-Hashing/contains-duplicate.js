var containsDuplicate = function (nums) {
  let arraySet = new Set(nums);

  return arraySet.size !== nums.length;
};

// SC - O(N)
// TC - O(N)
