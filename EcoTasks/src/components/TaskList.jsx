import TaskItem from './TaskItem';

function TaskList({ tarefas, onDeleteTask, onToggleStatus }) {
  if (tarefas.length === 0) {
    return <p className="no-tasks-message">Nenhuma EcoTask pendente! Adicione uma para começar. 🚀</p>;
  }

  return (
    <div className="task-list">
      {tarefas.map((tarefa) => (
        <TaskItem 
          key={tarefa.id} 
          tarefa={tarefa} 
          onDelete={onDeleteTask}
          onToggle={onToggleStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;