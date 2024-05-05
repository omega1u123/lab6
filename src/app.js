const express = require('express');
const menuRouter =  require('./resources/menu/menu.router.js');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/menu', menuRouter);

module.exports = app;
