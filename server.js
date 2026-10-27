const express = require('express');
const cors = require('cors');
const app = express();
const assignmentRoutes = require('./routes/assignmentRoutes');

app.use(cors());
app.use(express.json()); // To parse JSON

app.use('/api/assignments', assignmentRoutes);

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});