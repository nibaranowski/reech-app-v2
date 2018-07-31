var mongoose = require('mongoose');

var Lead = mongoose.model('Lead', {
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    jobTitle: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    status: { //1 shown, 0 hidden
        type: Boolean,
        required: false
    }
    // },
    // _picture: { //underscore because object ID
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false
    // },
    // _company: { //underscore because object ID
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false
    // },
});

module.exports = {Lead};
