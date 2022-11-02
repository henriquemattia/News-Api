import AuthController from "../controllers/authController.js";
import express from "express"

const router = express.Router();

router.post("/search", AuthController.search)

router.get("/brasil", AuthController.brasil)
router.get("/usa", AuthController.usa)
router.get("/london", AuthController.london)
router.get("/ucrania", AuthController.ucrania)
router.get("/russia", AuthController.russia)
router.get("/argentina", AuthController.argentina)
router.get("/venezuela", AuthController.venezuela)

export default router;