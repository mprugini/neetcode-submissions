class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = [];

        for(let i = 0; i < numbers.length; i++) {
            for(let j = i+1; j < numbers.length; j++) {
                if(numbers[i] + numbers[j] === target) {
                    res.push(numbers[i]);
                    res.push(numbers[j]);
                }
            }
        }

        return res;
    }
}
