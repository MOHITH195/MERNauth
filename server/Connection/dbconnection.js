
import mongoose from 'mongoose';

const db = async() => {

    try {
        const data = await mongoose.connect("mongodb+srv://mohith195195:AP39C5699@cluster0.r8lkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error:', err);
    }


}

export default db;

