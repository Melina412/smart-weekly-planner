import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ mongoDB connected');
  } catch (error) {
    console.log('mongoDB connection error: ', error.message);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});
