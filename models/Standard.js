const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StandardSchema = new Schema({
    number: {
        type: Number
    },
    students: [{type: Schema.Types.ObjectId, ref: "Student"}]
});

module.exports = mongoose.model("Standard", StandardSchema);