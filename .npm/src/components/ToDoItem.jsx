import React from 'react';

const TodoItem = React.memo(({ todo, onAction, actionLabel, actionStyle, onDelete }) => {
  console.log(`📌 TodoItem გადარენდერდა დავალებისთვის: "${todo.text}"`);

  return (
    <li>
      <span>{todo.text}</span>
      <div style={{ display: 'flex', gap: '5px' }}>
        
        
        <button onClick={() => onAction(todo.id)} style={actionStyle}>
          {actionLabel}
        </button>

       
        {onDelete && (
          <button
            onClick={() => onDelete(todo.id)}
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
        )}

      </div>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
export default TodoItem;