const signupModel = require("../models/user.model")
const signinModel = require("../models/user.model")
const bcrypt = require('bcryptjs');


const signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        console.log(req.body);

        // Check if the user already exists
        signupModel.findOne({ Email })
            .then(existingUser => {
                if (existingUser) {
                    console.log('User already exists');
                    return res.status(400).send({ status: false, message: 'User already exists' });
                }

                // Hash the password
                bcrypt.hash(Password, 10)
                    .then(hashedPassword => {
                        // Create and save the new user
                        const newUser = new signupModel({ Name, Email, Password: hashedPassword });

                        newUser.save()
                            .then(() => {
                                console.log("User saved successfully");
                                res.status(201).send({ status: true, message: "User registered successfully" });
                            })
                            .catch(err => {
                                console.error("Error while saving user:", err);
                                res.status(500).send({ status: false, message: "Error while saving user" });
                            });
                    })
                    .catch(err => {
                        console.error("Error while hashing password:", err);
                    });
            })
            .catch(err => {
                console.error("Error while checking for existing user:", err);
            });

    } catch (err) {
        console.error("Unexpected error:", err);
    }
};

    const signin = (req, res) => {
        const { Email, Password } = req.body;
    
        // Check if the user exists
        signinModel.findOne({ Email })
            .then(user => {
                if (!user) {
                    console.log('Invalid credentials: User not found');
                    return res.json({ status: false, message: 'Invalid credentials' });
                }
    
                // Compare password with the hashed password
                return bcrypt.compare(Password, user.Password)
                    .then(isMatch => {
                        if (!isMatch) {
                            console.log('Invalid credentials: Password mismatch');
                            return res.json({ status: false, message: 'Invalid credentials' });
                        }
    
                        // Generate a JWT token
                        const token = jwt.sign({ Email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                        console.log('Login successful for user:', Email);
                        return res.json({ status: true, message: 'Login successful', token });
                    });
            })
            .catch(err => {
                console.error("Error during signin:", err);
                return res.json({ status: false, message: 'Error during signin' });
            });
    };


module.exports = {
    signup,signin,
}