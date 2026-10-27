const express = require('express');
const router = express.Router();

// Sample data - Example from your PPT
let assignments = [
  {subject: "Web Technology", assignment: "HTML Forms", deadline: "2026-09-30", status: "Completed"},
  {subject: "JavaScript", assignment: "DOM Manipulation", deadline: "2026-10-03", status: "In Progress"},
  {subject: "PHP", assignment: "Form Validation", deadline: "2026-10-05", status: "Pending"}
];

// View Assignments
router.get('/', (req, res) => {
  res.json(assignments);
});

// Add Assignment
router.post('/', (req, res) => {
  assignments.push(req.body);
  res.json({message: "Added Successfully", data: assignments});
});

// Update Status
router.put('/:id', (req, res) => {
  assignments[req.params.id].status = req.body.status;
  res.json({message: "Updated"});
});

// Delete
router.delete('/:id', (req, res) => {
  assignments.splice(req.params.id, 1);
  res.json({message: "Deleted"});
});

module.exports = router;