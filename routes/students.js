import Router from 'express';

const router = Router(); 

router.get('/', (req, res) => res.status(200).send({
  message: "Here is all the students!"
}))

router.get("/:id", (req, res) => res.status(200).send({
  message: "Got one student!"
}));

router.post("/", (req, res) => res.status(201).send({
  message: "Created a new student!"
}));

router.delete("/:id", (req, res) => res.status(204).send({
  message: "One student down!"
}));

export default router;