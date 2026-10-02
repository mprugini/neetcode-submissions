class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let tempArr = s.replace(/[^a-z]/gi, "").split('');
        let res = false;
        let left = 0;
        let right = tempArr.length-1;

        while(left < right) {
            if(tempArr[left].toLowerCase() === tempArr[right].toLowerCase()) {
                res = true;
            } else {
                res = false;
            }

            left++;
            right--;
        }

        return res;
    }
}
