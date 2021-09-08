import Router from 'express';
import * as students from "../controllers/students.controller.js";

const router = Router();

router.get('/', students.findAll);

router.get("/:id", students.find);

router.post("/", students.create);

router.delete("/:id", students.destroy);

export default router;