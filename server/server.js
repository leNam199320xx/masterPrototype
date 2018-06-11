var express = require('express');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getconfig', function (req, res) {
    var data = JSON.parse(fs.readFileSync('./src/assets/users/namld/config.json', 'utf8'));
    res.status(200).send(data);
});

app.post('/api/setconfig', function (req, res) {
    if (req.body && req.body.fileValue) {
        var json = JSON.stringify(req.body.fileValue);
        fs.writeFile('./src/assets/users/namld/config.json', json, 'utf8', function () {
        });
        res.status(200).send('save newconfig is success !');
    } else {
        res.status(404).send('save newconfig is fail !');
    }   
});

app.listen(PORT, function () {
    console.log('my app listening on port 3000.');
});