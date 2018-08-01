


require('./config/config');

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

app.post('/leads', authenticate, async (req, res) => {
    try {
        const lead = new Lead({
            firstName: req.body.firstName,
            lastName: req.body.lastName//,
            //_creator: req.user._id //this is the info to link creation of object with user id
        });
        await lead.save();
        res.send(lead)
    } catch (e) {
        res.status(400).send(e);
    };
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.get('/leads', authenticate, async (req, res) => {
    try {
        const leads = await Lead.find(
            //{_creator: req.user._id} //only return lead created by user
        );
        res.send({leads});
    } catch (e) {
        res.status(400).send(e);
    };
});

app.get('/leads/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectID.isValid(id)) {
            return res.status(404).send();
        }
        const lead = await Lead.findById(id);
        res.send({lead});
    } catch (e) {
        res.status(400).send();
    }
});

app.delete('/leads/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;

        if(!ObjectID.isValid(id)) {
            return res.status(404).send();
        }

        const lead = await Lead.findByIdAndRemove(id);
        if (!lead) {
            return res.status(404).send();
        }
        res.send(lead);
    } catch (e) {
        res.status(400).send();
    }
});

app.patch('/leads/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        const body = _.pick(req.body, ['firstName', 'lastName']);
        if(!ObjectID.isValid(id)) {
            return res.status(404).send();
        }
        lead = await Lead.findByIdAndUpdate(id, {$set: body}, {new: true});
        res.send({lead})
    } catch (e) {
        res.status(400).send();
    }
});

//mode method = custom model methods
//instance method = custom method applied to specific instances

app.post('/users', async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = new User(body);
        await user.save();
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
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
  }
});

app.delete('/users/me/token', authenticate, async (req, res) => {
    try {
        await req.user.removeToken(req.token);
        res.status(200).send();
    } catch (e) {
        res.status(400).send();
    }
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports={app};
