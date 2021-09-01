import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  
  return (
    <div className="App">
    {/* <h1>Hello World</h1> */}
    <div className="board">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
    </div>
  );
}

export default App;
