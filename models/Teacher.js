const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    salary: {
        type: Number
    },
    experience: {
        type: Number
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model("Teacher", TeacherSchema);