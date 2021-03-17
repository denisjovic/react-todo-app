import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const finishedTodos = todos.filter((todo) => todo.done);
  const activeTodos = todos.filter((todo) => !todo.done);

  function addTodo() {
    const textInput = document.getElementById('text-input');
    const numOfTodos = todos.length;
    const newTodo = { id: numOfTodos + 1, done: false, name: currentTodo };
    if (textInput.value) {
      todos.push(newTodo);
      setTodos([...todos]);
      setCurrentTodo('');
    }
  }

  function toggleTodo(id) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <input
        type='text'
        id='text-input'
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button id='add-todo' onClick={() => addTodo()}>
        Add task
      </button>
      <h2>Todo:</h2>
      {activeTodos.map((todo) => {
        return (
          <ActiveTodo>
            <input
              type='checkbox'
              onClick={() => toggleTodo(todo.id)}
              checked={todo.done}
            />
            {todo.name}
          </ActiveTodo>
        );
      })}

      <h2>Done:</h2>
      {finishedTodos.map((todo) => {
        return (
          <FinishedTodo>
            <input
              type='checkbox'
              onClick={() => toggleTodo(todo.id)}
              checked={todo.done}
            />
            {todo.name}
          </FinishedTodo>
        );
      })}
    </div>
  );
}

const ActiveTodo = styled.div`{
  @keyframes appear {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  
  font-size: 1.5rem;
  animation-name: appear;
  animation-duration: 1s;

}

}`;

const FinishedTodo = styled.div`{
  @keyframes appear {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  
  font-size: 1.5rem;
  text-decoration: line-through;
  animation-name: appear;
  animation-duration: 1s;

}

}`;

export default App;
