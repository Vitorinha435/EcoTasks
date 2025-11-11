import React from 'react';

const TaskItem = ({ task, handleDeleteTask, handleToggleTaskStatus }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>Category: {task.category}</p>
      <p>Status: {task.concluded ? 'Concluded' : 'Pending'}</p>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      <button onClick={() => handleToggleTaskStatus(task.id)}>
        {task.concluded ? 'Mark as Pending' : 'Mark as Concluded'}
      </button>
    </div>
  );
};

export default TaskItem;
