import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Placeholder for fetching tasks from an API
    const initialTasks = [
      { id: 1, title: 'Sample Task 1', category: 'Work', concluded: false },
      { id: 2, title: 'Sample Task 2', category: 'Personal', concluded: true },
    ];
    setTasks(initialTasks);
  }, []);

  const handleAddTask = (task) => {
    console.log('Adding task:', task);
    // This is a placeholder. In a real app, you'd have a proper ID generation and backend call.
    setTasks([...tasks, { ...task, id: Date.now(), concluded: false }]);
  };

  const handleDeleteTask = (taskId) => {
    console.log('Deleting task with id:', taskId);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTaskStatus = (taskId) => {
    console.log('Toggling status for task with id:', taskId);
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, concluded: !task.concluded } : task
      )
    );
  };

  return (
    <>
      <h1>EcoTasks</h1>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleTaskStatus={handleToggleTaskStatus}
      />
    </>
  );
}

export default App;
