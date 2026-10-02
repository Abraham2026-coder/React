"use client";
import { useState } from "react";
import "./styles.css";


/*
function Boxes({ numBoxes }) {
    const arr = []
    for (let i = 1; i < numBoxes; i++) {
        arr.push(<div key={i} className="box"></div>)
    }
    return <div>{arr}</div>
}
*/

export default function TicTacToe() {
    const [board, setBoard] = useState([
        ["red", "black", "black"],
        ["black", "blue", "black"],
        ["black", "black", "black"]
    ])
    const arr = [];
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let k = 0; k < row.length; k++) {
            arr.push(<div key={`${i}${k}`} data-key={`${i}${k}`} className="cell" style={{
                backgroundColor: board[i][k]
            }}></div>
            )

        }
    }
    return (
        <div className="parent">
            {arr}
        </div>
    );

}