import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://kingh:kingh@cluster0.qsez5cp.mongodb.net/eccomerce?retryWrites=true&w=majority'
    );
    
    console.log(`MongDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
