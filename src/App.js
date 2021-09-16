
import './App.css';
import {useState} from 'react'
import Square from './Components/Square';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  
  return (
    <div className="App">
    {/* <h1>Hello World</h1> */}
    <div className="board">
      <div className="row">
        <Square val={board[0]} chooseSquare={() => {alert(0)}} />
        <Square val={board[1]} chooseSquare={() => {alert(1)}}/>
        <Square val={board[2]} chooseSquare={() => {alert(2)}}/>     
      </div>
      <div className="row">
        <Square val={board[3]} chooseSquare={() => {alert(3)}}/>
        <Square val={board[4]} chooseSquare={() => {alert(4)}}/>
        <Square val={board[5]} chooseSquare={() => {alert(5)}}/>
      </div>
        <Square val={board[6]} chooseSquare={() => {alert(6)}}/>
        <Square val={board[7]} chooseSquare={() => {alert(7)}}/>
        <Square val={board[8]} chooseSquare={() => {alert(8)}}/>
      <div className="row">

      </div>
    
    </div>
    </div>
  );
}

export default App;
