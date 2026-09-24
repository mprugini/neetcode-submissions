class MyHashSet {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.arr.includes(key)) {
            this.arr.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.arr.indexOf(key);

        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.arr.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
