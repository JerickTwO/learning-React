import { useState } from 'react'

const TURNS = {
  X: '✖️',
  O: '⭕'
}
import './App.css'
const Square = ({children, updateBoard, index})  =>{
  return(
    <div className="square" >
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState(['✖️','✖️','✖️','⭕','⭕','⭕','✖️','⭕','✖️' ])
  return (
    <main className="board">
    <h1>Tic tac toe</h1>
    <section className='game'>
      {
        board.map((_,index) => {
          return(
            <Square
              key={index}
              index={index}
            >
              {board[index]}
            </Square>
          )
        })
      }
    </section>
    </main>
   
  )
}

export default App
