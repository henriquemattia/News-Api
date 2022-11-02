import AuthController from "../controllers/authController.js";
import express from "express"

const router = express.Router();

router.get("/home", AuthController.home)
router.get("/brazil", AuthController.brazil)
router.get("/usa", AuthController.usa)

export default router;