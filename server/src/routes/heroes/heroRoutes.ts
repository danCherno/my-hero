import express from 'express';
import { addHero } from '../../controllers/heroes/addHero';
const router = express.Router();

router.post("/", addHero)
router.get("/")
router.delete("/:id")
router.put("/:id/rate")
router.get("/filter/:rating")
router.get("/search/:name")

export default router