const standardModel = require("../models/Standard");

const getClass = async (req, res, next) => {
    const number = req.params.classNumber;
    const standard = await standardModel.find({number: +number}).populate({path: "students"}).exec();
    res.json({standard});
}

const getClasses = async (req, res, next) => {
    const standards = await standardModel.find().exec();
    res.json({standards});
}

const postStudentInClass = async (req, res, next) => {
    const {number, id} = req.body;
    const standard = await standardModel.findOneAndUpdate({number: number}, {"$push": {"students" : id}}, {useFindAndModify: false});
    res.json({standard});
}

exports.getClass = getClass;
exports.getClasses = getClasses;
exports.postStudentInClass = postStudentInClass;
