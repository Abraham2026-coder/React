"use client";
import { useState } from "react";
import "./styles.css";
import { Elsie, Festive } from "next/font/google";
import getWinner from "./getWinner";

/*

let currentPlayer = "A";



*/
export default function TicTacToe() {
    const [board, setBoard] = useState([
        ["black", "black", "black"],
        ["black", "black", "black"],
        ["black", "black", "black"]
    ])
    const [currentPlayer, setCurrentPlayer] = useState("A");
    const [winner, setWinner] = useState(null);
    const [playAgain, setPlayAgain] = useState(false);



    const cells = [];

    /*     function updateBoard(i, k, color) {
            // setBoard(callback)
            // When we provide a callback, React will invoke it with the previous state
            // In the callback, we must return the new state
            setBoard((prevBoard) => {
                const nextBoard = prevBoard.map(row => [...row])
                nextBoard[i][k] = color;
                return nextBoard;
            })
        } */

    function handleClick(i, k) {
        console.log("clicked: ", i, k);
        if (board[i][k] === "black" && winner === null) {
            if (currentPlayer === "A") {
                // updateBoard(i, k, "red")
                const nextBoard = board.map(row => [...row])
                nextBoard[i][k] = "red";

                // setCurrentPlayer(newState)
                // If we provide a value directly, it will be the new state

                setBoard(nextBoard);
                setCurrentPlayer("B");
                setWinner(getWinner(nextBoard));
            } else {
                const nextBoard = board.map(row => [...row])
                nextBoard[i][k] = "blue";

                setBoard(nextBoard);
                setCurrentPlayer("A");
                setWinner(getWinner(nextBoard));
            }

        }
    }

    for (let i = 0; i < board.length; i++) {
        console.log(board.length);
        const row = board[i];
        for (let k = 0; k < row.length; k++) {
            console.log(row.length);
            // arr.map(arr.push(div))
            cells.push(
                <div key={`${i}${k}`}
                    className="cell"
                    style={{
                        backgroundColor: board[i][k]
                    }}
                    onClick={(e) => handleClick(i, k)}
                >

                </div>
            )

        }
    }
    function TheWinner() {
        if (winner === "Player A") {
            return (
                <div>
                    <span>GAME OVER: The winner is player A</span>
                    <button onClick={handlePlayAgain}>New Game ?</button>


                </div>
            )
        } else if (winner === "Player B") {
            return (
                <div>
                    <span>GAME OVER:The winner is player B</span>
                    <button onClick={handlePlayAgain}>New Game ?</button>
                </div>
            )
        } else if (winner === "draw") {
            return (
                <div>
                    <span>GAME OVER:Draw There is no winner</span>
                    <button onClick={handlePlayAgain}>New Game ?</button>
                </div>
            )

        }

    }
    function handlePlayAgain() {
        setBoard([
            ["black", "black", "black"],
            ["black", "black", "black"],
            ["black", "black", "black"]
        ]);
        setCurrentPlayer("A");
        setWinner(null);
    }

    console.log({ board, winner })
    return (
        <>
            <div>
                <p>Current player is : {currentPlayer}</p>
            </div>
            <div>
                <TheWinner />
            </div>
            <div className="parent" style={{ opacity: winner === null ? 1 : 0.5 }}>
                {cells}
            </div>
        </>

    );

}