class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            while (
                nums[i] >= 1 &&
                nums[i] <= n &&
                nums[nums[i] - 1] !== nums[i]
            ) {
                const targetIndex = nums[i] - 1;

                [nums[i], nums[targetIndex]] =
                    [nums[targetIndex], nums[i]];
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
