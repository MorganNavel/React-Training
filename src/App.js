import {useState} from 'react';
function Square({value, onSquareClick}){

  return <button onClick={onSquareClick} className="square">{value}</button>
}
export default function Board(){
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const handleClick = (i) => {
    if(squares[i]|| proccessWinner(squares)) return;
    const nextSquares = squares.slice();
    if(isNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setIsNext(!isNext);
  }
  const winner = proccessWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else{
    status = "Next player: " + (isNext ? "X" : "O");
  }
  const reset = () => {
    setSquares([null, null, null, null, null, null, null, null, null]);
    setIsNext(true);
  }
  return (<>
  <h1>Tic Tac Toe</h1>
  <div className="status">{status}</div>
  <div className="board-row"><Square value={squares[0]} onSquareClick={()=>handleClick(0)}/><Square value={squares[1]} onSquareClick={()=>handleClick(1)}/><Square value={squares[2]} onSquareClick={()=>handleClick(2)}/></div>
  <div className="board-row"><Square value={squares[3]} onSquareClick={()=>handleClick(3)}/><Square value={squares[4]} onSquareClick={()=>handleClick(4)}/><Square value={squares[5]} onSquareClick={()=>handleClick(5)}/></div>
  <div className="board-row"><Square value={squares[6]} onSquareClick={()=>handleClick(6)}/><Square value={squares[7]} onSquareClick={()=>handleClick(7)}/><Square value={squares[8]} onSquareClick={()=>handleClick(8)}/></div>
  <button onClick={reset}>Reset</button>
  </>);
}

function proccessWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}