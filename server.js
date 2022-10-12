//Install express server
require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/markdown-blogger'));
app.use(cors({credentials: true, origin: true}));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/markdown-blogger/'});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port ${ PORT }");
});
