var express = require('express');
var app = express();
var fs = require('fs');


app.get('/api/getconfig', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./src/assets/users/namld/config.json', 'utf8'));
    res.status(200).send(data);
});

app.post('/api/setconfig', (req, res) => {
    res.status(200).send('successed !');
});

app.listen(3000, function () {
    console.log('my app listening on port 3000.');
});