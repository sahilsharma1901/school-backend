const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const standardRoutes = require("./routes/standardRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use("/students", studentRoutes);
app.use("/classes", standardRoutes);
app.use("/teachers", teacherRoutes);


mongoose.connect("mongodb+srv://sahil_sharma_pt:pataran@cluster0.y6qda.mongodb.net/school?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then(
    app.listen(5000, () => {
        console.log("Server Running On Port 5000 with DB connected!");
    })
).catch(error => console.log(error));
