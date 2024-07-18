
const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

// Route to get all tasks
router.get('/', projectController.getAllProject);

// Route to create a new task
router.post('/', projectController.createProject);

// Route to get a task by ID
router.get('/:id', projectController.getProjectById);

// Route to update a task by ID
router.put('/:id', projectController.updateProject);

// Route to delete a task by ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;
