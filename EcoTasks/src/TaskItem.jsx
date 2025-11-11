import React from "react";

const TaskItem = ({ task, handleDeleteTask, handleToggleTaskStatus }) => {
  const taskClassName = `
    task-item 
    ${task.concluded ? "concluded" : ""}
  `;

  return (
    <div className={taskClassName.trim()}>
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>Categoria: {task.category}</p>
    </div>

      <div className="task-actions">
        <button
          onClick={() => handleToggleTaskStatus(task.id)}
          className="btn-toggle"
        >
          {task.concluded ? "Restaurar" : "Concluir"}
        </button>
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="btn-delete"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
