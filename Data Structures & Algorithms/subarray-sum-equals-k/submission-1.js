class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;
        let prefixSum = { 0: 1};

        for(let i = 0; i < nums.length; i++) {
            curSum += nums[i];
            let diff = curSum - k;

            res += (prefixSum[diff] ? prefixSum[diff] : 0);

            prefixSum[curSum] = 1 + (prefixSum[curSum] ? prefixSum[curSum] : 0);
        }

        return res;
    }
}
