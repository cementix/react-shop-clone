import { Router } from "express";
const router = new Router();
import UserController from "../controllers/userController.js";

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.check);

export default router;