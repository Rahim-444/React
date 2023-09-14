export function nextMove(board) {
  const player = 0; // AI player, assuming 0 represents the AI
  const opponent = 1; // Opponent player, assuming 1 represents the opponent

  // The minimax function that recursively evaluates the game tree
  function minimax(board, depth, isMaximizing) {
    // Recursive case: Generate all possible moves and evaluate them
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === 2) {
          board[i] = player;
          const score = minimax(board, depth + 1, false);
          board[i] = 2;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === 2) {
          board[i] = opponent;
          const score = minimax(board, depth + 1, true);
          board[i] = 2;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  // Find the best move for the AI using minimax
  let bestMove = -1;
  let bestScore = -Infinity;
  for (let i = 0; i < 9; i++) {
    if (board[i] === 2) {
      board[i] = player;
      const score = minimax(board, 0, false);
      board[i] = 2;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}
