const studentModel = require("../models/Student");

const getStudents = async (req, res, next) => {
    const students = await studentModel.find().exec();
    res.json({students});
}

const getStudent = async (req, res, next) => {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    res.json({student});
}

const postStudent = async (req, res, next) => {
    const { name, age, rollNumber, standard, address } = req.body;

    const student = new studentModel({
        name,
        age,
        rollNumber,
        standard,
        address,
    });
    const result = await student.save();
    res.json({result});
}

const updateStudent = async (req, res, next) => {
    const id = req.params.studentId;

    const { name, age, rollNumber, standard, address } = req.body;

    const student = await studentModel.findById(id);
    
    student.name = name;
    student.age = age;
    student.standard = standard;
    student.rollNumber = rollNumber;
    student.address = address;

    const result = await student.save();
    res.json({result});
}

const deleteStudent = async (req, res, next) => {
    const id = req.params.studentId;

    const student = await studentModel.findById(id);
    await student.remove();

    res.json({message: "Student Record Deleted"});
}

exports.getStudents = getStudents;
exports.getStudent = getStudent;
exports.postStudent = postStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;