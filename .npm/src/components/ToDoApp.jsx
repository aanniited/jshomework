import { useState, useCallback } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import '../ToDoApp.css';


let uniqueId = 1;

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  console.log("🏠 TodoApp გადარენდერდა!");

  
  const addTodo = useCallback((text) => {
    const newTodo = {
      id: uniqueId++,
      text: text
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  
  const completeTodo = useCallback((id) => {
    
    const todoToComplete = todos.find(todo => todo.id === id);
    if (!todoToComplete) return;

    
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    setCompletedTodos((prevCompleted) => [...prevCompleted, todoToComplete]);
  }, [todos]); 

  
  const deleteTodo = useCallback((id) => {
    setCompletedTodos((prevCompleted) => prevCompleted.filter(todo => todo.id !== id));
  }, []);

  
  const moveToTodo = useCallback((id) => {
    
    const todoToMove = completedTodos.find(todo => todo.id === id);
    if (!todoToMove) return;

    
    setCompletedTodos((prevCompleted) => prevCompleted.filter(todo => todo.id !== id));
    setTodos((prevTodos) => [...prevTodos, todoToMove]);
  }, [completedTodos]); 

  return (
    <div className="todo-page">
      <div className="todo-wrapper">
        <h2>To-Do აპლიკაცია</h2>

        <TodoInput onAddTodo={addTodo} />

        <div className="columns-container">
          
          <div className="todo-column">
            <h3>შესასრულებელი</h3>
            <ul className="todo-list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onAction={completeTodo}
                  actionLabel="დასრულება"
                  actionStyle={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    padding: '5px 10px'
                  }}
                />
              ))}
            </ul>
          </div>

          
          <div className="todo-column">
            <h3>შესრულებული</h3>
            <ul className="todo-list">
              {completedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onAction={moveToTodo}
                  actionLabel="უკან"
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TodoApp;