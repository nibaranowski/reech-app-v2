var mongoose = require('mongoose');

var Company = mongoose.model('Company', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    address: {
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
    website: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    numEmployee: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    revenue: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    marketCap: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    _logo: { //underscore because object ID
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    _industry: { //underscore because object ID
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});

module.exports = {Company};
