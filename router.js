import { Router } from "express";
import * as controller from './controller.js';

const router=Router();
router.route("/add").post(controller.addData);
router.route("/get").get(controller.getData);
router.route("/delete/:id").delete(controller.deleteData);

export default router;