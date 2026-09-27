class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;
    
        function dfs(r, c, index) {
            // Base Case: If we matched all characters in the word, return true
            if (index === word.length) return true;
        
            // Check bounds and if the current cell matches the required character
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) {
                return false;
            }
        
            // Track the original character and mark the cell as visited
            const temp = board[r][c];
            board[r][c] = '#'; 
        
            // Explore all 4 neighboring directions (up, down, left, right)
            const found = dfs(r + 1, c, index + 1) || dfs(r - 1, c, index + 1) || dfs(r, c + 1, index + 1) || dfs(r, c - 1, index + 1);
        
            // Backtrack: restore the original character for other search paths
            // board[r][c] = temp;
        
            return found;
        }
    
        // Traverse the entire grid to find a potential starting point
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }
    
        return false;
    }
}
