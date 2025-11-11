import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleDeleteTask, handleToggleTaskStatus }) => {
  return (
    // Adicionamos a classe aqui
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleToggleTaskStatus={handleToggleTaskStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
