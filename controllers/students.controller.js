import Student from "../models/student.js";


export const findAll = (req, res) => {
  const students = Student.findAll();
  res.status(200).send({ students });
}

export const find = (req, res) => {
  const student = Student.find(req.params.id);
  res.status(200).send({ student });
}

export const create = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save();
  res.status(201).send({ 
    message: "Student has been made", 
    student: newStudent 
  });
}

export const destroy = (req, res) => {
  const message = Student.destroy(req.params.id)
  res.status(202).send({ message });
}