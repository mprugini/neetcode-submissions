class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsHash = {};

        for(let i = 0; i < nums.length; i++) {
            numsHash[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if(Object.hasOwn(numsHash, difference) && numsHash[difference] !== i) {
                return [i, numsHash[difference]];
            }
        }
    }
}
