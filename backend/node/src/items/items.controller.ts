import { Item } from './items.model';
import { Request, Response } from 'express';

export const getItems = async (req: Request, res: Response) => {
  try {
    // platzhalter für aggregation
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
