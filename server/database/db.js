import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// const USERNAME = encodeURIComponent(process.env.DB_USERNAME);
// const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const Connection = () => {

    const MONGODB_URI = 'mongodb+srv://Aryathampi1234:lfJmkULZvfmy6O0O@mern-todo.vs2wlzl.mongodb.net/ToDo?retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;