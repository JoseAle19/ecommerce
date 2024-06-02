import { Router } from "express";
import { check } from "express-validator";
import {login, register  } from "../controllers/auth_controller.js";
import { validateFields } from "../middleware/validations_fields.js";
import { existEmail } from "../middleware/db_validations.js";
const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Auth" });
});

router.post("/login", login  )
router.post("/register", [
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check("password", "The password is required").isLength({ min: 6 }),
    validateFields,
    existEmail,
]  , register  )


export default router;