import { Router } from "express";
const router = new Router();
import BrandController from "../controllers/brandController.js";

router.post('/', BrandController.create);
router.get('/', BrandController.getAll);

export default router;