const User = require("../models/user.model");
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        console.log(req.body);

        // Check if the user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).send({ status: false, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create and save the new user
        const newUser = new User({ Name, Email, Password: hashedPassword });

        await newUser.save();
        console.log("User saved successfully");
        res.status(201).send({ status: true, message: "User registered successfully" });

    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send({ status: false, message: "Error during signup" });
    }
};

const signin = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ Email });
        if (!user) {
            console.log('Invalid credentials: User not found');
            return res.status(400).send({ status: false, message: 'User Not Found' });
        }

        // Compare password with the hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            console.log('Invalid credentials: Password mismatch');
            return res.status(400).send({ status: false, message: 'Invalid credentials: Password mismatch' });
        }

        // Generate a JWT token
        const token = jwt.sign({ Email: user.Email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Login successful for user:', Email);

        // Optionally update the last login time
        user.lastLogin = new Date();
        await user.save();

        console.log('User updated successfully:', user);
        return res.status(200).send({ status: true, message: 'Login successful', token });

    } catch (err) {
        console.error("Error during signin:", err);
        return res.status(500).send({ status: false, message: 'Error during signin' });
    }
};

module.exports = {
    signup,
    signin,
};
