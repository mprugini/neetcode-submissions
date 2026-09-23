class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let tempNums = [];

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] != val) {
                tempNums.push(nums[i]);
            }
        }

        nums = tempNums;

        console.log(nums);
    }
}
