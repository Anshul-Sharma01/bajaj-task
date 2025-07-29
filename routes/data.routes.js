import { Router } from "express";
import { fetchDataAfterProcessing } from "../controllers/data.controller.js";



const router = Router();


router.route("/").post(fetchDataAfterProcessing);


export default router;

