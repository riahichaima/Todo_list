const express = require('express');
const app = express();
const db = require('./models/index.js');
const taskRoute = require('./routes/taskRoute.js');
const projectRoute = require('./routes/projectRoute.js');

// Connect to the database
db.sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/tasks', taskRoute);
app.use('/projects', projectRoute);

// Define a simple route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application!' });
});

// Set the port to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});