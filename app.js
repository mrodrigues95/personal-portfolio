const express = require('express');

const app = express();

// Boot from this directory.
app.use(express.static(__dirname + '/src'));

app.listen(3000);