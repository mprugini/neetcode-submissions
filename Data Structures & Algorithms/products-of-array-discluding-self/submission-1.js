class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = Array(nums.length).fill(0);
        let prefix = Array(nums.length).fill(0);
        let suffix = Array(nums.length).fill(0);

        let tempPrefVal = 1;
        let tempSufVal = 1;

        for(let i = 0; i < nums.length; i++) {
            prefix[i] = tempPrefVal;
            tempPrefVal = tempPrefVal * nums[i];
        }

        console.log(prefix);

        for(let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = tempSufVal;
            tempSufVal *= nums[i];
        }

        for(let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i];
        }

        return output;
    }
}
