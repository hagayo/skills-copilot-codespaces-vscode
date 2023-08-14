// Create web server application
// 1. Create web server application
// 2. Create a router object
// 3. Create a route for the root path
// 4. Create a route for the /about path
// 5. Create a route for the /contact path
// 6. Create a route for the /comments path
// 7. Create a route for the /comments/new path
// 8. Create a route for the /comments/:id path
// 9. Create a route for the /comments/:id/edit path
// 10. Create a route for the /comments/:id/delete path
// 11. Start the web server application
// 12. Test the web server application

// 1. Create web server application
// Import express module
const express = require('express');

// Create express application
const app = express();

// 2. Create a router object
// Create a router object
const router = express.Router();

// 3. Create a route for the root path
// Create a route for the root path
router.get('/', (req, res) => {
  res.send('GET /comments - display a list of comments');
});

// 4. Create a route for the /about path
// Create a route for the /about path
router.get('/about', (req, res) => {
  res.send('GET /comments/about - display an about page');
});

// 5. Create a route for the /contact path
// Create a route for the /contact path
router.get('/contact', (req, res) => {
  res.send('GET /comments/contact - display a contact page');
});

// 6. Create a route for the /comments path
// Create a route for the /comments path
router.get('/comments', (req, res) => {
  res.send('GET /comments - display a list of comments');
});

// 7. Create a route for the /comments/new path
// Create a route for the /comments/new path
router.get('/comments/new', (req, res) => {
  res.send('GET /comments/new - display a form for adding a new comment');
});

// 8. Create a route for the /comments/:id path
// Create a route for the /comments/:id path
router.get('/comments/:id', (req, res) => {
  res.send

