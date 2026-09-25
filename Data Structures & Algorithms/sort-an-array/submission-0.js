class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length < 2) return nums;

        let pivot = Math.floor(nums.length / 2);
        
        const left = nums.slice(0, pivot);
        const right = nums.slice(pivot);

        // Recursively split and then merge the sorted halves
        return this.merge(this.sortArray(left), this.sortArray(right));
    }

    merge(left, right) {
        let i = 0, j = 0;
        let result = [];

        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

}
