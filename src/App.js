import React, { useState } from 'react';

import './App.css';

 

const initialBoard = Array(9).fill(null);

 

const calculateWinner = (squares) => {

  const lines = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6],

  ];

 

  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      return squares[a];

    }

  }

 

  return null;

};

 

const Square = ({ value, onClick }) => (

  <button className="square" onClick={onClick}>

    {value}

  </button>

);

 

const Board = () => {

  const [squares, setSquares] = useState(initialBoard);

  const [xIsNext, setXIsNext] = useState(true);

 

  const handleClick = (i) => {

    if (squares[i] || calculateWinner(squares)) {

      return;

    }

 

    const newSquares = squares.slice();

    newSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);

    setXIsNext(!xIsNext);

  };

 

  const renderSquare = (i) => (

    <Square value={squares[i]} onClick={() => handleClick(i)} />

  );

 

  const winner = calculateWinner(squares);

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

 

  return (

    <div>

      <div className="status">{status}</div>

      <div className="board-row">

        {renderSquare(0)}

        {renderSquare(1)}

        {renderSquare(2)}

      </div>

      <div className="board-row">

        {renderSquare(3)}

        {renderSquare(4)}

        {renderSquare(5)}

      </div>

      <div className="board-row">

        {renderSquare(6)}

        {renderSquare(7)}

        {renderSquare(8)}

      </div>

    </div>

  );

};

 

const App = () => (

  <div className="App">

    <header className="App-header">

      <h1>Tic Tac Toe</h1>

    </header>

    <main>

      <Board />

    </main>

  </div>

);
export default App;
