import React, { useState } from "react";

const TaskForm = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) {
      alert("Por favor, preencha ambos os campos");
      return;
    }
    handleAddTask({ title, category });
    setTitle("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
