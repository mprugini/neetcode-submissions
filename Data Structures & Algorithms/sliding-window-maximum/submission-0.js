class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let tempArr = [];
        let maxArr = [];

        for(let i = 0; i < nums.length; i++) {
            if(i+k > nums.length) break;

            for(let j = 0; j < k; j++) {
                tempArr.push(nums[i+j]);
            }

            const max = tempArr.reduce((a, b) => Math.max(a, b), -Infinity);

            maxArr.push(max);
            tempArr = [];
        }

        return maxArr;
    }
}
