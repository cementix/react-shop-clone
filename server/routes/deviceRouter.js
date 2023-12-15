import { Router } from "express";
const router = new Router();
import DeviceController from "../controllers/deviceController.js";

router.post('/', DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);

export default router;