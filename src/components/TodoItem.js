import React from 'react';

const TodoItem = ({ task, toggleTask, removeTask }) => {
  return (
    <li className="todo-item">
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Excluir</button>
    </li>
  );
};

export default TodoItem;
