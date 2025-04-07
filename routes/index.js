const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Home route – list all assignments with optional keyword search
router.get('/', async (req, res) => {
  try {
    let query = {};
    if (req.query.keyword) {
      // Simple case-insensitive search on title or description
      query = {
        $or: [
          { title: { $regex: req.query.keyword, $options: 'i' } },
          { description: { $regex: req.query.keyword, $options: 'i' } }
        ]
      };
    }
    const assignments = await Assignment.find(query).sort({ deadline: 1 });
    res.render('index', { assignments, keyword: req.query.keyword || "" });
  } catch (error) {
    res.status(500).send("Error retrieving assignments");
  }
});

// Show form to add new assignment
router.get('/add', (req, res) => {
  res.render('edit', { assignment: {} });
});

// Route to add new assignment
router.post('/add', async (req, res) => {
  const { title, description, deadline, submissionStatus } = req.body;
  const newAssignment = new Assignment({ title, description, deadline, submissionStatus });
  try {
    await newAssignment.save();
    req.flash('success_msg', 'Assignment added successfully');
    res.redirect('/');
  } catch (error) {
    req.flash('error_msg', 'Error adding assignment');
    res.redirect('/');
  }
});

// Show edit form for an assignment
router.get('/edit/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      req.flash('error_msg', 'Assignment not found');
      return res.redirect('/');
    }
    res.render('edit', { assignment });
  } catch (error) {
    req.flash('error_msg', 'Error fetching assignment');
    res.redirect('/');
  }
});

// Update assignment route
router.post('/update/:id', async (req, res) => {
  const { title, description, deadline, submissionStatus } = req.body;
  try {
    await Assignment.findByIdAndUpdate(req.params.id, { title, description, deadline, submissionStatus });
    req.flash('success_msg', 'Assignment updated successfully');
    res.redirect('/');
  } catch (error) {
    req.flash('error_msg', 'Error updating assignment');
    res.redirect('/');
  }
});

// Delete assignment route
router.post('/delete/:id', async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Assignment deleted successfully');
    res.redirect('/');
  } catch (error) {
    req.flash('error_msg', 'Error deleting assignment');
    res.redirect('/');
  }
});

module.exports = router;
