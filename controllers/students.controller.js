export const findAll = (req, res) => {
  res.status(200).send({
      message: "all the students!"
  });
}

export const find = (req, res) => {
  res.status(200).send({
      message: "one student with id: " + req.params.id
  });
}

export const create = (req, res) => {
  res.status(201).send({
      message: "Student successfully created"
  });
}

export const destroy = (req, res) => {
  res.status(202).send({
      message: "Student successfully deleted with id: " + req.params.id
  });
}