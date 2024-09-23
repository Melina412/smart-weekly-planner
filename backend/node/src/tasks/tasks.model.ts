import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  type: String,
  date: Date,
  startTime: Date,
  endTime: Date,
  travelTime: Number,
  category: String,
});

export const Task = mongoose.model('Task', taskSchema);
