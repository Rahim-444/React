/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState, useEffect } from "react";
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
    const [eqS, seteqS] = useState(false);
    const handleClick = (index) => {
        const UpdateBoard = board.map((value, ind) => {
            if (index === ind) {
                if (eqS === true) {
                    Setxplay(!xplay);
                    if (xplay & (value === null)) {
                        return "X";
                    } else if (!xplay & (value === null)) {
                        return "O";
                    }
                }
            }
            return value;
        });
        setBoard(UpdateBoard);
    };
    const makeEquation = () => {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let operators = ["+", "-", "*"];
        let firstNumber = numbers[Math.floor(Math.random() * 9)];
        let secondNumber = numbers[Math.floor(Math.random() * 9)] * 10;
        let operator = operators[Math.floor(Math.random() * 3)];
        let Equation = `${firstNumber} ${operator} ${secondNumber}`;
        return Equation;
    };
    const [equation, setEquation] = useState(makeEquation());
    useEffect(() => {
        setEquation(makeEquation());
    }, []);

    const [res, setres] = useState(null);
    const change = (event) => {
        setres(event.target.value);
    };
    let equationsolved;
    const Fclick = () => {
        let answer = eval(equation);
        let userAnswer = parseInt(res);

        if (userAnswer !== answer) {
            Setxplay(!xplay);
            seteqS(false);
        } else {
            seteqS(true);
        }

        // Generate a new equation after checking the user's answer
        setEquation(makeEquation());
        setres(""); // Clear the input field
    };
    return (
        <div className="App">
            <div className="equation-x">
                {!xplay ? (
                    <h1>Wait for your turn</h1>
                ) : (
                    <div>
                        <h1>Equation X</h1>
                        <h2>{equation}</h2>
                        <input type="text" value={res} onChange={change} />
                        <button onClick={Fclick}>Submit</button>
                    </div>
                )}
            </div>
            <div className="tic">
                <Win xWinnings={xCount} oWinnings={oCount} />
                <Board board={board} onClick={handleClick} />
                <button className="reset" onClick={reset}>
                    Reset
                </button>
                {HandleWin(board)}
            </div>
            <div className="equation-o">
                {xplay ? (
                    <h1>Wait for your turn</h1>
                ) : (
                    <div>
                        <h1>Equation O</h1>
                        <h2>{equation}</h2>
                        <input type="text" value={res} onChange={change} />
                        <button onClick={Fclick}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
