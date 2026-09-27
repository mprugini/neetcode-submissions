class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        const maxArr = [];

        for (let i = 0; i < nums.length; i++) {
            // Remove indices that are outside the current window
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift();
            }

            // Remove indices of elements smaller than the current element
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            deque.push(i);

            // Add maximum element for the current window
            if (i >= k - 1) {
                maxArr.push(nums[deque[0]]);
            }
        }

        return maxArr;
    }
}
