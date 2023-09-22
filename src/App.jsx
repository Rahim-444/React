/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import { Board } from "./components/board";
import { Win } from "./components/Winboard";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xplay, Setxplay] = useState(true);
    const [xCount, setxCount] = useState(0);
    const [oCount, setoCount] = useState(0);

    const reset = () => {
        setBoard(Array(9).fill(null));
        setxCount(0);
        setoCount(0);
    };
    const HandleWin = (board) => {
        for (let i = 0; i < 7; i += 3) {
            if (
                (board[i] === board[i + 1]) &
                (board[i + 1] === board[i + 2]) &
                (board[i] !== null)
            ) {
                board[i] === "X" ? setxCount(xCount + 1) : setoCount(oCount + 1);
                setBoard(Array(9).fill(null));
            }
        }
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                break;
            } else {
                if (i === 8) {
                    setBoard(Array(9).fill(null));
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            if (
                (board[i] === board[i + 3]) &
                (board[i + 3] === board[i + 6]) &
                (board[i] !== null)
            ) {
                board[i] === "X" ? setxCount(xCount + 1) : setoCount(oCount + 1);
                setBoard(Array(9).fill(null));
            }
        }
        if (
            (board[0] === board[8]) &
            (board[8] === board[4]) &
            (board[0] !== null)
        ) {
            board[0] === "X" ? setxCount(xCount + 1) : setoCount(oCount + 1);
            setBoard(Array(9).fill(null));
        }
        if (
            (board[2] === board[6]) &
            (board[6] === board[4]) &
            (board[2] !== null)
        ) {
            board[2] === "X" ? setxCount(xCount + 1) : setoCount(oCount + 1);
            setBoard(Array(9).fill(null));
        }
    };
    const handleClick = (index) => {
        const UpdateBoard = board.map((value, ind) => {
            if (index === ind) {
                Setxplay(!xplay);
                if (xplay & (value === null)) {
                    return "X";
                } else if (!xplay & (value === null)) {
                    return "O";
                }
            }
            return value;
        });
        setBoard(UpdateBoard);
    };
    return (
        <div className="App">
            <Win xWinnings={xCount} oWinnings={oCount} />
            <Board board={board} onClick={handleClick} />
            <button className="reset" onClick={reset}>
                Reset
            </button>
            {HandleWin(board)}
        </div>
    );
}

export default App;
