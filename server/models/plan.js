var mongoose = require('mongoose');

var Plan = mongoose.model('Plan', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    priceUsdMonth: {
        type: Number,
        required: true,
        minlength: 1
    },
    priceUsdYear: {
        type: Number,
        required: true,
        minlength: 1
    }
});

module.exports = {Plan};
