class Solution {
    /**
     * @param {character[][]}
     * @return {boolean}
     */
    isValidSudoku(board) {
        let tempRows = board.length;
        let tempCols = board[0].length;

        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for(let r = 0; r < tempRows; r++) {
            for(let c = 0; c < tempCols; c++) {
                if(board[r][c] !== '.') {
                    let val = board[r][c];
                    let boxIdx = Math.floor(r/3)*3 + Math.floor(c/3);

                    if(rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
                        return false;
                    } else {
                        rows[r].add(val);
                        cols[c].add(val);
                        boxes[boxIdx].add(val);
                    }
                }
            }
        }

        return true;
    }
}
