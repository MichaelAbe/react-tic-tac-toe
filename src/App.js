
import './App.css';
import {useState, useEffect} from 'react'
import Square from './Components/Square';
import { Patterns } from './Patterns';


function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setplayer] = useState("O")
  const [result, setResult] = useState({winner: "none", state: "none"})


  useEffect(() => {
    checkWin()
    checkIfTie()
    if (player === "X") {
      setplayer('O')
    }
    else{
      setplayer('X')
    }
  }, [board])

  useEffect(() => {
    if (result.state != "none") {
      alert(`${result.winner} WINS!`)
      reStart()
    }
    
  }, [result])

  const activePlayer = () => {
    if (player === "X") {
      alert(`${player} to move`)
    }
    else{
    }
  }

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        return player
      }
      return val
    })
    )
  }

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]]
      if (firstPlayer === "") return
      let foundWinning = true
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinning = false
        }
      })
      
      if (foundWinning) {
        setResult({winner: player, state: 'Won'})
      }
    })
  }

  const checkIfTie = () => {
    let filled = true
    board.forEach((square) => {
      if (square == "") {
        filled = false
      }
    })
    if (filled) {
      setResult({winner: "No winner", state: "Tie"})
    }
  }

  const reStart = () => {
    setBoard(['', '', '', '', '', '', '', '', ''])
    setplayer('X')
  }

  return (
    <div className="App">
    {/* <h1>Hello World</h1> */}
    <div className="board">
      <div className="row">
        <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
        <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
        <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />  
      </div>
      <div className="row">
        <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
        <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
        <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
      </div>
      <div className="row">
        <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
        <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
        <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />

      </div>
    
    </div>
      <div className="active">
        activePlayer()
      </div>
    </div>
  );
}

export default App;
