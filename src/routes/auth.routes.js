import { Router } from "express";
import {login, register  } from "../controllers/auth_controller.js";
const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Auth" });
});

router.post("/login", login  )
router.post("/register", register  )


export default router;