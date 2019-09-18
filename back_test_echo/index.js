const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');
var conf = './conf.json';
const cors = require('cors');
app.use(cors())

//var https = require('https');

//var options = {
//  key: fs.readFileSync('key/client-key.pem'),
//  cert: fs.readFileSync('key/client-cert.pem')
//};

//https.createServer(options, app).listen(4443);

app.post('/save', jsonParser, function(req,res){
    var data = JSON.stringify(req.body);
    fs.writeFile(conf,data, (err) => { 
            if (err) throw err;
    }); 
res.status(200).send('ok');
})

app.get('/read', function(req,res){
    fs.readFile(conf, (err, data) => {
        if (err) throw err;
        var x = JSON.parse(data);
    res.status(200).send(x);
});
})

app.listen(8000);
