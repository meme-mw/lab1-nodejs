import express from "express";

import { signupUser,login } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', signupUser);
router.post('/login',login);

export default router;