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
  const student = new Student();
  const message = student.save();
  res.status(201).send({ message, student });
}

export const destroy = (req, res) => {
  const message = Student.destroy(req.params.id)
  res.status(202).send({ message });
}