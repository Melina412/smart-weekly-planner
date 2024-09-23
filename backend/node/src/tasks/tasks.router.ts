import express from 'express';
import { addTask, getTasks } from './tasks.controller';

export const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
