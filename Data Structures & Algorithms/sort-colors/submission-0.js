class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        if(nums.length === 1) return nums;

        let i = 0;
        let j = 1;

        while(j < nums.length - 1) {
            if(nums[i] > nums[j]) {
                const tempNum = nums[i];
                nums[i] = nums[j];
                nums[j] = tempNum;
            }
            i++;
            j++;
        }

        console.log(nums);
    }
}
