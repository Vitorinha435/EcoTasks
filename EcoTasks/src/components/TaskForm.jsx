import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Reciclagem');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      alert('O título da EcoTask é obrigatório!');
      return;
    }

    // Chama a função passada pelo App.jsx
    onAddTask({ titulo, categoria });
    setTitulo(''); // Limpa o input
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nova tarefa (ex: 'Economizar água no banho')"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
        />
        <select 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)}
        >
            <option value="Reciclagem">♻️ Reciclagem</option>
            <option value="Economia">💡 Economia</option>
            <option value="Meio Ambiente">🌳 Meio Ambiente</option>
            <option value="Geral">📄 Geral</option>
        </select>
        <button type="submit">Adicionar EcoTask</button>
    </form>
  );
}

export default TaskForm;