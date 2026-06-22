import  { useState } from 'react';
import '../ToDoApp.css';

function TodoApp() {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const completeTodo = (id) => {
    const todoToComplete = todos.find(todo => todo.id === id);

    const updatedTodos = todos.filter(
      todo => todo.id !== id
    );

    setTodos(updatedTodos);

    setCompletedTodos([
      ...completedTodos,
      todoToComplete
    ]);
  };

  const deleteTodo = (id) => {
    const updatedCompleted = completedTodos.filter(
      todo => todo.id !== id
    );

    setCompletedTodos(updatedCompleted);
  };

  const moveToTodo = (id) => {

    const todoToMove = completedTodos.find(
      todo => todo.id === id
    );

    const updatedCompleted = completedTodos.filter(
      todo => todo.id !== id
    );

    setCompletedTodos(updatedCompleted);

    setTodos([
      ...todos,
      todoToMove
    ]);
  };

  return (
    <div className="todo-page">
      <div className="todo-wrapper">

        <h2>To-Do აპლიკაცია</h2>

        <div className="input-section">

          <input
            type="text"
            value={inputValue}
            onChange={onChange}
            placeholder="ჩაწერე დავალება..."
            className="todo-input"
          />

          <button
            onClick={addTodo}
            className="add-button"
          >
            დამატება
          </button>

        </div>

        <div className="columns-container">

          <div className="todo-column">

            <h3>შესასრულებელი</h3>

            <ul className="todo-list">

              {todos.map((todo) => {

                return (

                  <li key={todo.id}>

                    <span>{todo.text}</span>

                    <button
                      onClick={() => completeTodo(todo.id)}
                      style={{
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        padding: '5px 10px'
                      }}
                    >
                      დასრულება
                    </button>

                  </li>

                );

              })}

            </ul>

          </div>

          <div className="todo-column">

            <h3>შესრულებული</h3>

            <ul className="todo-list">

              {completedTodos.map((todo) => {

                return (

                  <li key={todo.id}>

                    <span>{todo.text}</span>

                    <div style={{ display: 'flex', gap: '5px' }}>

                      <button
                        onClick={() => moveToTodo(todo.id)}
                      >
                        უკან
                      </button>

                      <button
                        onClick={() => deleteTodo(todo.id)}
                        style={{
                          backgroundColor: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          padding: '5px 10px'
                        }}
                      >
                        წაშლა
                      </button>

                    </div>

                  </li>

                );

              })}

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TodoApp;