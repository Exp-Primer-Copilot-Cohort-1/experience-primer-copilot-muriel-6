// Create web server
const express = require('express');
const router = express.Router();

// Import the controller module
const commentController = require('../controllers/commentController');

// Comment routes
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);

module.exports = router;

const express = require('express');
const app = express();
const port = 3000;

// Define the comment routes and their handlers directly in this file.
app.get('/comments', (req, res) => {
    res.send('Display a list of comments');
  });
  
  app.get('/comments/create', (req, res) => {
    res.send('Return a form for creating a new comment');
  });
  
  app.post('/comments/create', (req, res) => {
    res.send('Process the form submission and create a new comment');
  });
  
  app.get('/comments/:id/delete', (req, res) => {
    res.send('Display a form for deleting comment with id ' + req.params.id);
  });
  
  // Start the server and listen on the specified port.
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });