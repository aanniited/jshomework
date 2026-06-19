import  { Component } from 'react';
import '../ToDoApp.css';

class TodoApp extends Component {
  state = {
    inputValue: "",
    todos: [],
    completedTodos: []
  };

  onChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  
  addTodo = () => {
    if (this.state.inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: this.state.inputValue
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: ""
    });
  };

  //  მარცხნიდან მარჯვნივ გადატანა
  completeTodo = (id) => {
    const todoToComplete = this.state.todos.find(todo => todo.id === id);
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos: updatedTodos,
      completedTodos: [...this.state.completedTodos, todoToComplete]
    });
  };

  // დავალების წაშლა 
  deleteTodo = (id) => {
    const updatedCompleted = this.state.completedTodos.filter(todo => todo.id !== id);
    this.setState({
      completedTodos: updatedCompleted
    });
  };

  //  უკან დაბრუნება 
  moveToTodo = (id) => {
    const todoToMove = this.state.completedTodos.find(todo => todo.id === id);
    const updatedCompleted = this.state.completedTodos.filter(todo => todo.id !== id);

    this.setState({
      completedTodos: updatedCompleted,
      todos: [...this.state.todos, todoToMove]
    });
  };
 


render() {
  return (
    <div className="todo-page">
      <div className="todo-wrapper">
        <h2>To-Do აპლიკაცია</h2>
        
        
        <div className="input-section">
          <input 
            type="text" 
            value={this.state.inputValue} 
            onChange={this.onChange} 
            placeholder="ჩაწერე დავალება..."
            className="todo-input"
          />
          <button onClick={this.addTodo} className="add-button">
            დამატება
          </button>
        </div>

        
        <div className="columns-container">
          
         
          <div className="todo-column">
            <h3>შესასრულებელი</h3>
            <ul className="todo-list">
              {this.state.todos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button 
                      onClick={() => this.completeTodo(todo.id)} 
                      style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '5px 10px' }}
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
              {this.state.completedTodos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <span>{todo.text}</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      
                      <button 
                        onClick={() => this.moveToTodo(todo.id)}
                        
                      >
                        უკან
                      </button>
                      {/* წაშლის ღილაკი */}
                      <button 
                        onClick={() => this.deleteTodo(todo.id)}
                        style={{ backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '5px 10px' }}
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
}
export default TodoApp;