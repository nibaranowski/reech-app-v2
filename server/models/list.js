var mongoose = require('mongoose');

var List = mongoose.model('List', {
    _lead: { //underscore because object ID
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    _user: { //underscore because object ID
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});

module.exports = {List};
