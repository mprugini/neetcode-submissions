class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hashMap = {};
        let n = nums.length;

        for(let i = 0; i < n; i++) {
            if(hashMap[nums[i]]) {
                hashMap[nums[i]]++;
            } else {
                hashMap[nums[i]] = 1;
            }
        }

        for(const [key, value] of Object.entries(hashMap)) {
            if(value > n/2) {
                return key;
            }
        }
    }
}
