import { Task } from './tasks.model';
import { Request, Response } from 'express';

export const addTask = async (req: Request, res: Response) => {
  const { title, type, date, startTime, endTime, travelTime, category } = req.body;

  try {
    const task = new Task({ title, type, date, startTime, endTime, travelTime, category });
    const result = await task.save();

    if (result) {
      res.status(201).json({ success: true, message: 'new task added to db' });
    } else {
      res.status(400).json({
        success: false,
        message: 'task not saved',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
