class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sHash = {};
        let tHash = {};

        for(let i = 0; i < s.length; i++) {
            if(sHash === {}) {
                sHash[s[i]] = 1;
            } else {
                if(sHash[s[i]]) {
                    sHash[s[i]]++;
                } else {
                    sHash[s[i]] = 1;
                }
            }
        }

        for(let i = 0; i < t.length; i++) {
            if(tHash === {}) {
                tHash[t[i]] = 1;
            } else {
                if(tHash[t[i]]) {
                    tHash[t[i]]++;
                } else {
                    tHash[t[i]] = 1;
                }
            }
        }

        const keys1 = Object.keys(sHash);

        for (let key of keys1) {
            if (sHash[key] !== tHash[key]) {
                return false;
            }
        }

        return true;
    }
}
