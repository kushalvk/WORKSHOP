const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

const StudentModel = mongoose.model("stud", StudentSchema);
module.exports = StudentModel;