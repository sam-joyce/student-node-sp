import Router from 'express';

const router = Router(); 

router.get('/', (req, res) => res.status(200).send({
  message: "Here is all the students!"
}))

export default router;