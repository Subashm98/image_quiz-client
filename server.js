const express = require('express');

//create the server
const app = express();
const port = process.env.PORT || 4002;


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/quiz.html', (request, response) => {
    response.sendFile(__dirname + '/quiz.html');
});

app.get('/admin.html', (request, response) => {
    response.sendFile(__dirname + '/admin.html');
});

app.listen(port, () => console.log("Listening on port " + port));