import React, { useState } from "react";

const TaskForm = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Reciclagem",
    "Economia de Água",
    "Economia de Energia",
    "Consumo Consciente",
    "Reutilização",
    "Transporte Sustentável",
    "Meio Ambiente",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) {
      alert("Por favor, preencha o título e selecione uma categoria");
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

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Selecione uma categoria
        </option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
