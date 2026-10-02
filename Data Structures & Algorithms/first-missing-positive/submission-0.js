class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let smallestNum = nums[0];
        let map = {};
        let res = nums[0];

        for(let i = 0; i < nums.length; i++) {
            if(smallestNum > nums[i]) smallestNum = nums[i];

            if(map[nums[i]]) {
                map[nums[i]]++;
            } else {
                map[nums[i]] = 1;
            }
        }

        for(let i = 0; i < nums.length; i++) {
            if(map[nums[i]] && map[nums[i] + 1]) {
                // do nothing
            } else {
                res = nums[i] + 1;
                return res;
            }
        }

        // return res;

        // console.log(smallestNum, map, res);
    }
}
