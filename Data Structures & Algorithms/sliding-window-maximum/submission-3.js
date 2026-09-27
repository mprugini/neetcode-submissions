class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deque = new Deque();
        let maxArr = [];

        for (let i = 0; i < nums.length; i++) {
            // Remove elements outside the current sliding window
            if (!deque.isEmpty() && deque.front() <= i - k) {
                deque.popFront();
            }

            // Remove elements smaller than current element nums[i]
            while (!deque.isEmpty() && nums[deque.back()] < nums[i]) {
                deque.popBack();
            }

            deque.pushBack(i);

            // Add the max of current window (front of deque) once window size is at least k
            if (i >= k - 1) {
                maxArr.push(nums[deque.front()]);
            }
        }

        return maxArr;
    }
}
