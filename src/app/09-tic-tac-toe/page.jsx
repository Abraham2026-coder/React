"use client";
import { useState } from "react";
import "./styles.css";
import { Elsie } from "next/font/google";
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
    console.log({ board, winner })
    return (
        <>
            <div>
                <p>Current player is : {currentPlayer}</p>
            </div>
            <div className="parent">
                {cells}
            </div>
        </>

    );

}