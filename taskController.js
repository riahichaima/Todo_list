// controllers/taskController.js
const { Task } = require('../models');


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tâches.' });
  }
};


const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de la tâche.' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Tâche non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la tâche.' });
  }
};


const updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.update(req.body);
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Tâche non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la tâche.' });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tâche non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la tâche.' });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
