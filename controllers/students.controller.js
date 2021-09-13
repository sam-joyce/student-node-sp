const Student = require("../models/student.js");


const findAll = async (req, res) => {
  const students = await Student.findAll();
  res.status(200).send({ students });
}

const find = async (req, res) => {
  // console.log(req.params.id);
  const student = await Student.find(req.params.id);
  console.log(student);
  res.status(200).send({ student });
}

const create = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save();
  res.status(201).send({ 
    message: "Student has been made", 
    student: newStudent 
  });
}

const destroy = async (req, res) => {
  const message = await Student.destroy(req.params.id)
  res.status(202).send({ message });
}

module.exports = {findAll, find, create, destroy};