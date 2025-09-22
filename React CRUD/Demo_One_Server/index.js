const express = require('express');
const mongoose = require('mongoose');
const StudentModel = require('./Model/StudentSchema');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

if (mongoose.connect('mongodb://localhost:27017/Student')) {
    console.log("Database Connected !");
}

app.post("/ragister", (req, res) => {
    const { fullName, email, password } = req.body;

    StudentModel.create({ fullName, email, password })
        .then((data) => {
            res.json({ message: "Data inserted Successfully :)", data });
        })
        .catch((error) => res.status(500).json({ error }));
});

app.post("/update", (req, res) => {
    const { UfullName, Uemail, Upassword } = req.body;

    StudentModel.findOneAndUpdate({ fullName: UfullName }, { email: Uemail, password: Upassword })
        .then((data) => {
            res.json({ message: "Data Updated Successfully :)", data });
        })
        .catch((error) => res.status(500).json({ error }));
});

app.get("/view", (req, res) => {
    StudentModel.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => res.status(500).json({ error }));
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    StudentModel.findByIdAndDelete(id)
        .then((data) => res.status(200).json({ message: "User Deleted !", data }))
        .catch((error) => res.status(500).json(error))
})

app.get("/", (req, res) => {
    res.json("Hello World !");
});

app.listen(5000, () => {
    console.log("Server started at posrt 5000!");
});