import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    fetchStats();
  }, [tasks]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3000/tasks');
    setTasks(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get('http://localhost:3000/tasks/stats');
    setTotalTasks(res.data.totalTasks);
    setCompletedTasks(res.data.completedTasks);
  };

  const addTask = async () => {
    if (newTask.trim() === '') {
      alert('O nome da tarefa não pode estar vazio');
      return;
    }

    const taskDescriptions = tasks.map(task => task.description);
    if (taskDescriptions.includes(newTask)) {
      alert('A tarefa com esse nome já existe, defina um novo nome ou exclua a existente!');
      return;
    }

    const res = await axios.post('http://localhost:3000/tasks', { description: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const toggleTask = async (id) => {
    await axios.put(`http://localhost:3000/tasks/${id}`);
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <div className="task-stats">
        <p>Total de tarefas: {totalTasks}</p>
        <p>Tarefas concluídas: {completedTasks}</p>
      </div>
      <div className="task-input-section">
        <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} className="task-input"/>
        <button onClick={addTask} className="add-task-btn">Adicionar tarefa</button>
      </div>
      {tasks.map(task => (
        <div key={task.id} className="task">
          <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} className="task-description">{task.description}</span>
          <button onClick={() => toggleTask(task.id)} className={task.done ? 'undo-btn' : 'done-btn'}>{task.done ? 'Desfazer' : 'Concluir'}</button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default App;
