"use client";

import "./styles.css";

import { useState } from "react";
export default function TicTacToeMulti() {
    const [board, setBoard] = useState([
        ["black", "black", "black"],
        ["black", "black", "black"],
        ["black", "black", "black"]
    ]);

    const cells = [];

    for (let i = 0; i < board.length; i++) {
        console.log(board.length);
        const row = board[i];
        for (let k = 0; k < row.length; k++) {
            console.log(row.length);
            cells.push(
                <div key={`${i}${k}`}
                    className="cell"
                    style={{
                        backgroundColor: board[i][k]
                    }}
                >

                </div>
            )

        }
    }
    return (
        <div className="parent" >
            {cells}
        </div>
    );
}
