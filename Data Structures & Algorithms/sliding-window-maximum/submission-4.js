class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let tempArr = [];
        let maxArr = []

        for(let i = 0; i < nums.length-k+1; i++) {
            for(let j = 0; j < k; j++) {
                tempArr.push(nums[i+j]);
            }

            let max = Math.max(...tempArr);
            maxArr.push(max);
            tempArr = [];
        }

        return maxArr;
    }
}
