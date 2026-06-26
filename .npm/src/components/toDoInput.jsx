import React, { useState } from 'react';

const TodoInput = React.memo(({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  console.log("✍️ TodoInput გადარენდერდა!");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="ჩაწერე დავალება......"
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">
        დამატება
      </button>
    </div>
  );
});

TodoInput.displayName = 'TodoInput';
export default TodoInput;