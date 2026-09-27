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
            
            let max = tempArr.sort((a, b) => a - b)[tempArr.length-1];
            maxArr.push(max);
            tempArr = [];
        }

        return maxArr;
    }
}
