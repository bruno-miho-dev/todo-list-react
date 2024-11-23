import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
