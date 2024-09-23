import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: String,
  type: String,
  date: Date,
  startTime: Date,
  endTime: Date,
  travelTime: Number,
  category: String,
});

export const Item = mongoose.model('Item', itemSchema);
