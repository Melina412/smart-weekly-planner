import express from 'express';
import { getItems } from './items.controller';

export const router = express.Router();

router.get('/', getItems);
