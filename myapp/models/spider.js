const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SpiderSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
SpiderSchema.plugin(uniqueValidator);
const Spider = module.exports = mongoose.model('Spider', SpiderSchema);