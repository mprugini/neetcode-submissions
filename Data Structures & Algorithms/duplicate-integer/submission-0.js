class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 0) return false;

        let dupObj = {};

        for(let i = 0; i < nums.length; i++) {
            if(dupObj === {}) {
                dupObj[nums[i]] = 1;
            } else {
                if(dupObj[nums[i]]) {
                    dupObj[nums[i]]++;
                } else {
                    dupObj[nums[i]] = 1;
                }
            }
        }

        let finalAnswer = false;

        for (const [key, value] of Object.entries(dupObj)) {
            if (value > 1) {
                finalAnswer = true;
            }
        }

        return finalAnswer;
    }
}
