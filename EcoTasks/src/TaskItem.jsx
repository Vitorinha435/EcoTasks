import React from "react";

// Recebemos as props que o App.jsx está enviando
const TaskItem = ({ task, handleDeleteTask, handleToggleTaskStatus }) => {
  // Criamos o className dinâmico
  const taskClassName = `
    task-item 
    ${task.concluded ? "concluded" : ""}
  `;

  return (
    // Aplicamos o className dinâmico aqui
    <div className={taskClassName.trim()}>
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>Categoria: {task.category}</p>
        {/* Status agora é visual (riscado), mas podemos manter se quiser
        <p>Status: {task.concluded ? 'Concluded' : 'Pending'}</p> 
        */}
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
