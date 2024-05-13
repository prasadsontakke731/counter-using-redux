
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCount, minusCount, resetCount } from './utils/counterSlice'
import { toggleMenu } from './utils/toggleSlice'
import { useRef } from 'react'
import { addTodo, deleteTodo } from './utils/todoSlice'

function App() {
  const todoref = useRef()
  const count = useSelector(store => store.counter)
  const togglee = useSelector(store => store.toggle)
  const todo = useSelector(store => store.todo)
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addCount())
  }
  const handleMinus = () => {
    dispatch(minusCount())
  }
  const handleReset = () => {
    dispatch(resetCount())
  }
  const handleToggle = () => {
    dispatch(toggleMenu())
  }

  const handleTodo = () => {

    dispatch(addTodo(todoref.current.value))
  }
  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      {
        togglee && <> <h1 style={{ textAlign: "center" }}> {count}</h1>
          <div style={{ textAlign: "center" }}>
            <button onClick={handleMinus}>MINUS</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleAdd}>ADD</button>
          </div></>
      }

      {
        togglee ? <button onClick={handleToggle}>Hide</button> : <button onClick={handleToggle}>Show</button>
      }

      <div style={{ textAlign: "center" }}>
        <input type="text" placeholder='enter task' ref={todoref} />
        <button onClick={handleTodo}>ADD Task</button>

        {
          todo.map((item, index) => (
            <ul key={index}>
              <li>{item} <span><button onClick={() => handleTodoDelete(item)}>delete</button></span></li>
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default App
