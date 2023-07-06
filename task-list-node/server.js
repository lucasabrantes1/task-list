const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let tasks = [
    { id: 1, description: 'task1', done: false },
    { id: 2, description: 'task2', done: false }
  ];
  

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('teste')
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  

app.post('/tasks', (req, res) => {
    const taskDescription = req.body.description;
  
    if (taskDescription.trim() === '') {
      res.status(400).send({ error: 'A descrição da tarefa não pode ficar vazia' });
      return;
    }
  
    const existingTask = tasks.find(task => task.description === taskDescription);
    if (existingTask) {
      res.status(400).send({ error: 'A tarefa com esse nome já existe, defina um novo nome ou exclua a existente!' });
      return;
    }
  
    const task = {
      id: tasks.length + 1,
      description: taskDescription,
      done: false
    };
    tasks.push(task);
    res.status(201).json(task);
});
  


  app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarefa com não encontrada');
    task.done = !task.done;
  
    res.json(task);
  });
  


app.delete('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarefa com não encontrada');
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.json(task);
  });



//qtd
app.get('/tasks/stats', (req, res) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task=> task.done === true).length;
  
    res.json({
      totalTasks: totalTasks,
      completedTasks: completedTasks
    });
  });
  
  


  
  

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`porta: ${port}`));


