// Create web server with Express
// 1. Create a new Express application
// 2. Create a new route that listens for GET requests on the /comments path
// 3. When a GET request is made, send back the entire comments array
// 4. Start the server on port 4001

const express = require('express');
const app = express();
const PORT = 4001;

const comments = [
  { username: 'Todd', comment: 'lol that is so funny' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' }
];

app.get('/comments', (req, res, next) => {
  res.send(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

