class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let COLS = board[0].length;
        let ROWS = board.length;

        function dfs(r, c, index) {
            if (index === word.length) return true;

            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[index]) return false;

            const temp = board[r][c];
            board[r][c] = '#'; 

            const found = dfs(r+1,c,index+1) || dfs(r-1,c,index+1) || dfs(r,c+1,index+1) || dfs(r,c-1,index+1);

            board[r][c] = temp;

            return found;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] === word[0] && dfs(r,c,0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
