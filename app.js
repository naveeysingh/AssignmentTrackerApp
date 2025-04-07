const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Set view engine to HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register custom Handlebars helpers
hbs.registerHelper('formatDate', function(date) {
  if (date) {
    return new Date(date).toISOString().split('T')[0];
  }
  return '';
});

hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express session middleware
app.use(session({
  secret: 'assignmentsecret',
  resave: false,
  saveUninitialized: true
}));

// Connect-flash middleware
app.use(flash());

// Global variables for flash messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 404 error handling
app.use((req, res, next) => {
  res.status(404).render('error', { message: "Page not found" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
