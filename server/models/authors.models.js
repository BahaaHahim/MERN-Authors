const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true," Name is required"],
        minLength: [2, "Add Name, at least 2 characters"]
    }
}, { timestamps: true });


module.exports.Author = mongoose.model("Name", NameSchema);