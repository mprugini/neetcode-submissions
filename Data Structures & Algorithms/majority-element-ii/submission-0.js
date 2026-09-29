class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let majorityElementCount = Math.floor(nums.length / 3);
        let map = {};

        for(let i = 0; i < nums.length; i++) {
            if(map[nums[i]]) {
                map[nums[i]]++;
            } else {
                map[nums[i]] = 1;
            }
        }

        let finalRes = [];

        for(const [key, value] of Object.entries(map)) {
            if(value > majorityElementCount) {
                finalRes.push(Number(key));
            }
        }

        return finalRes;
    }
}
