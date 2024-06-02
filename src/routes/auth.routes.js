import { Router } from "express";
import { check } from "express-validator";
import {login, readJWT, register  } from "../controllers/auth_controller.js";
import { validateFields } from "../middleware/validations_fields.js";
import { existEmail } from "../middleware/db_validations.js";
import { verifyToken } from "../helpers/create_token.js";
const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Auth" });
});

router.post("/login",[
    check("email", "The email is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check("password", "The password is required").not().isEmpty(),
    validateFields
] ,login  )



router.post("/register", [
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check('email', 'Correo no valido').isEmail(),
    check("password", "The password is required").isLength({ min: 6 }),
    validateFields,
    existEmail,
]  , register  )
router.get("/read-Jwt", verifyToken, readJWT);

export default router;