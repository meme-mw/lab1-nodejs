import express from "express";

import { addBook,addoneBook } from '../controllers/bookController.js';

const router = express.Router();

router.post('/addBook', addBook);
router.post('/addBook/:id',addoneBook);

export default router;