class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(nums.length === 1) return nums;
        if(nums.length === 2) return nums;

        let mapSlideWin = {};
        let finalArr = [];

        for(let i = 0; i < nums.length-k+1; i++) {
            mapSlideWin[i] = [nums[i], nums[i+1], nums[i+2]];
        }

        for(const [key,value] of Object.entries(mapSlideWin)) {
            let max = 0;
            for(let i = 0; i < value.length; i++) {
                if(value[i] > max) {
                    max = value[i];
                }
            }
            finalArr.push(max);
        }

        return finalArr;
    }
}
