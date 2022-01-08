const path = require('path');
const express = require('express');
const App = require('./app.js');

const server = express();

server.use('/static', express.static(path.join(__dirname, 'public')));

server.get('*', function(req, res) {

  var { html, head } = App.render({ 
    url: req.url,
    auth: true
  });
  
  res.write(`
    <!DOCTYPE html>
    <head>
    ${head}
    </head>
    <link rel='stylesheet' href='static/global.min.css'>
    <link rel='stylesheet' href='static/bundle.css'>
    <div id="app">${html}</div>
    <script src="static/bundle.js"></script>
  `);

  res.end();
});

server.listen(3000, () => console.log('Listening on port 3000...'));
