const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the EcoTasks backend!');
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving tasks from database');
  }
});

// Add a new task
app.post('/tasks', async (req, res) => {
  try {
    const { name, completed } = req.body;
    const [result] = await db.query('INSERT INTO tasks (name, completed) VALUES (?, ?)', [name, completed]);
    res.status(201).json({ id: result.insertId, name, completed });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding task to database');
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, completed } = req.body;
    await db.query('UPDATE tasks SET name = ?, completed = ? WHERE id = ?', [name, completed, id]);
    res.json({ id, name, completed });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating task in database');
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting task from database');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
