import { Router } from "express";
const router = new Router();
import TypeController from "../controllers/typeController.js";

router.post('/', TypeController.create);
router.get('/', TypeController.getAll);

export default router;