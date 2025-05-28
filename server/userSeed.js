import User from './models/user.js'; // Ensure this path is correct
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async (user) => {
    try {
        // Connect to the database
        await connectToDatabase();

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = new User({
            username: user.username, // Ensure you include username
            email: user.email,
            password: hashedPassword,
            role: user.role || 'employee', // Default to 'employee' if not specified
        });

        await newUser.save();
        console.log('User registered successfully');
    } catch (error) {
        console.log(error);
    }
};

// Example usage
userRegister({
    username: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin123' // Replace with a real password
});