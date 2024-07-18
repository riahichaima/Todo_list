// projectController.js
const db = require('../models/index');
const Project = db.Project;

exports.getAllProject = (req, res) => {
  Project.findAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.createProject = (req, res) => {
  Project.create(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.getProjectById = (req, res) => {
  const id = req.params.id;
  Project.findByPk(id)
    .then(project => {
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.updateProject = (req, res) => {
  const id = req.params.id;
  Project.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ message: 'Project updated successfully' });
      } else {
        res.status(404).json({ message: 'Cannot update project. Project not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.deleteProject = (req, res) => {
  const id = req.params.id;
  Project.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ message: 'Project deleted successfully' });
      } else {
        res.status(404).json({ message: 'Cannot delete project. Project not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};