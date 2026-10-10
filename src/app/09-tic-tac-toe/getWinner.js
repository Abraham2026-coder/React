export default function getWinner(board) {
    // Check rows
    for (let row = 0; row < board.length; row++) {
        if (board[row][0] === "red" && board[row][1] === "red" && board[row][2] === "red") {
            return "Player A";
        }

        if (board[row][0] === "blue" && board[row][1] === "blue" && board[row][2] === "blue") {
            return "Player B";
        }
    }

    // Check columns
    for (let col = 0; col < board.length; col++) {
        if (board[0][col] === "red" && board[1][col] === "red" && board[2][col] === "red") {
            return "Player A";
        }

        if (board[0][col] === "blue" && board[1][col] === "blue" && board[2][col] === "blue") {
            return "Player B";
        }
    }

    // Check diagonal 1
    if (board[0][0] === "red" && board[1][1] === "red" && board[2][2] === "red") {
        return "Player A";
    }
    if (board[0][0] === "blue" && board[1][1] === "blue" && board[2][2] === "blue") {
        return "Player B";
    }

    // Check diagonal 2
    if (board[2][0] === "red" && board[1][1] === "red" && board[0][2] === "red") {
        return "Player A";
    }
    if (board[2][0] === "blue" && board[1][1] === "blue" && board[0][2] === "blue") {
        return "Player B";
    }

    // Check if there are some black cells and return null to indicate game in progress
    const isRunning = board.some((row) => (row).some(cell => cell === "black"));
    // 
    // const isRunning2 = board.some(function (row) {
    //     return row.some(function (cell) {
    //         return cell === "black";
    //     });
    // });
    // Considered as draw
    if (isRunning === false) {
        return "draw";
    }
    return null;

}