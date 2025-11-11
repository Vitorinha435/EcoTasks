function TaskItem({ tarefa, onDelete, onToggle }) {
  const isConcluida = tarefa.status;

  return (
    <div className={`task-item ${isConcluida ? 'concluida' : 'pendente'}`}>
      <div className="task-info">
        <span className={`task-categoria categoria-${tarefa.categoria.toLowerCase().replace(' ', '-')}`}>
          {tarefa.categoria}
        </span>
        <p className={`task-titulo ${isConcluida ? 'text-strike' : ''}`}>
          {tarefa.titulo}
        </p>
      </div>

      <div className="task-actions">
        {/* Botão de Toggle Status (Update) */}
        <button 
          className="btn-toggle"
          onClick={() => onToggle(tarefa.id, isConcluida)}
          title={isConcluida ? "Marcar como Pendente" : "Marcar como Concluída"}
        >
          {isConcluida ? '↩️ Refazer' : '✅ Concluir'}
        </button>

        {/* Botão de Excluir (Delete) */}
        <button 
          className="btn-delete" 
          onClick={() => onDelete(tarefa.id)}
          title="Excluir Tarefa"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TaskItem;