const findAll = {
  tags: ["Students"],
  description: "GET all students - receive a list of all the students",
  operationId: "findAll",
  responses: {
      "200": {
          description: "The students were retrieved",
          content: "application/json"
      }
  }
}

const find = {
  tags: ["Students"],
  description: "GET one student - receive a selected student using it's id",
  operationId: "find",
  responses: {
      "200": {
          description: "The student was retrieved",
          content: "application/json"
      }
  }
}

const create = {
  tags: ["Students"],
  description: "POST a student - add a student to the list of students",
  operationId: "create",
  responses: {
      "201": {
          description: "The student was successfully created",
          content: "application/json"
      }
  }
}

const destroy = {
  tags: ["Students"],
  description: "DELETE one student - remove an item from the students using its id",
  operationId: "destroy",
  responses: {
      "200": {
          description: "The student was successfully destroyed",
          content: "application/json"
      }
  }
}

module.exports = { findAll, find, create, destroy };