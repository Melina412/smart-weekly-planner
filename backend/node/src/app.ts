import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

import { router as ItemRouter } from './items/items.router';
import { router as taskRouter } from './tasks/tasks.router';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/items', ItemRouter);
app.use('/api/tasks', taskRouter);
