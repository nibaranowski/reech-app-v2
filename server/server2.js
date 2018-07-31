


//require('./config/config');

// const path = require('path');
// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var mongoose = require('./db/mongoose');
var {Company} = require('./models/company');
var {Industry} = require('./models/industry');
var {Lead} = require('./models/lead');
var {List} = require('./models/list');
var {Plan} = require('./models/plan');
var {User} = require('./models/user');

var app = express();

//const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
//const port = 3000;

app.use(bodyParser.json()); //allow to send json to express app
//
// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// app.post('/leads', (req, res) => {
//   console.log(req.body);
// });

app.post('/leads', (req, res) => {
    var lead = new Lead({
        firstName: req.body.firstName
    });

    lead.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/leads', (req, res) => {
    Lead.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/leads/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Lead.findById(id).then((lead) => {
        if (!lead) {
            return res.status(404).send();
        }

        res.send({lead});
    }).catch((e) => {
        res.status(400).send();
    })
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports={app};
