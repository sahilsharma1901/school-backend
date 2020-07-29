const teacherModel = require("../models/Teacher");

const getTeachers = async (req, res, next) => {
    const teachers = await teacherModel.find().exec();
    res.json({teachers});
}

exports.getTeachers = getTeachers;