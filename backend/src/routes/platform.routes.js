import express from "express";
import { getPlatforms } from "../controllers/platform.controller.js";

const router = express.Router();

router.get("/", getPlatforms);

export default router;