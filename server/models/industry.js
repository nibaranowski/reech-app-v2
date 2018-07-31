var mongoose = require('mongoose');

var Industry = mongoose.model('Industry', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Industry};
