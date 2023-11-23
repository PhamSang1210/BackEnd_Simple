import express from "express";
import AccessController from "../../controllers/access.controller.js";
import { apiKey } from "./checkAuth.route.js";
const router = express.Router();

router.use(apiKey);
router.post("/login", AccessController.login);
router.post("/register", AccessController.register);

export default router;
