


//require('./config/config');

// const path = require('path');
const _ = require('lodash');
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
var {authenticate} = require('./middleware/authenticate');

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
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    lead.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/leads', (req, res) => {
    Lead.find().then((leads) => {
        res.send({leads})
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

app.delete('/leads/:id', async (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Lead.findByIdAndRemove(id).then((lead) => {
        if (!lead) {
            return res.status(404).send();
        }

        res.send(lead);
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/leads/:id', (req, res) => {
    console.log('hi')
    var id = req.params.id;
    var body = _.pick(req.body, ['firstName', 'lastName']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // if(_.isBoolean(body.completed) && body.completed) {
    //     body.compledtedAt = new Date().getTime();
    // } else {
    //     body.completed = false;
    //     body.compledtedAt = null;
    // }

    Lead.findByIdAndUpdate(id, {$set: body}, {new: true}).then((lead) => {
        if (!lead) {
            return res.status(404).send();
        }

        res.send({lead});
    }).catch((e) => {
        res.status(400).send();
    })
});

//mode method = custom model methods
//instance method = custom method applied to specific instances

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
        //res.send(user);
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});


app.post('/users/login', async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = await User.findByCredentials(body.email, body.password);
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch (e) {
        res.status(400).send();
    };


    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    });
})


app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports={app};
