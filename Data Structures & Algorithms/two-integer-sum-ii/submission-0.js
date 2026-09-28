class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = [];

        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] + numbers[i+1] === target) {
                res = [numbers[i], numbers[i+1]];
            }
        }

        return res;
    }
}
