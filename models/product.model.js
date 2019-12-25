const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    Name: {type: String, required: true, max: 100},
    Length: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);