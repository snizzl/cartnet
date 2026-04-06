import mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('Database error:', error);
    process.exit(1);
  }
}

export async function closeConnection(force: boolean = false) {
  try {
    await mongoose.connection.close(force);
  } catch (error) {
    console.error('Database error:', error);
    process.exit(1);
  }
}
