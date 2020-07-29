const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String
    },
    standard: {
        type: Number
    },
    age: {
        type: Number
    },
    rollNumber: {
        type: Number
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model("Student", StudentSchema);