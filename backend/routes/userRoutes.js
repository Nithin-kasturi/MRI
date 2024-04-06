import express from 'express'
import { getRecord, insertRecord } from '../controllers/userController.js';
const router=express.Router();
router.post('/insert',insertRecord);
router.get('/fetch',getRecord);

export default router;