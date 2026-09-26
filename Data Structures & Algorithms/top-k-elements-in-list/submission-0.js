class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 1) return nums;

        let map = {};

        for(let i = 0; i < nums.length; i++) {
            if(map[nums[i]]) {
                map[nums[i]]++;
            } else {
                map[nums[i]] = 1;
            }
        }

        const sortedPairs = Object.entries(map).sort((a, b) => b[1] - a[1]);
        const result = [];
        console.log(sortedPairs);

        for(let i = 0; i < sortedPairs.length; i++) {
            if(k > 0) {
                result.push(Number(sortedPairs[i][0]));
                k--;
            }
        }

        return result;
    }
}
