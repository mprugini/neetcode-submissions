class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // if(strs.length === 1) {
        //     return strs[0];
        // }

        let longestPrefix = '';

        for(let i = 0; i < strs[0].length; i++) {
            for(const s of strs) {
               if(i === s.length || strs[0][i] !== s[i]) {
                return longestPrefix;
               }
            }
            longestPrefix += strs[0][i];
        }

        return longestPrefix;
    }
}
