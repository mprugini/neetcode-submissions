class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxLength = 0;
        let currentNum = 0;
        let currentStreak = 0;

        for(const num of numSet) {
            if(!numSet.has(num - 1)) {
                currentNum = num;
                currentStreak = 1;

                while(numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                maxLength = Math.max(maxLength, currentStreak);
            }
        }

        return maxLength;
    }
}