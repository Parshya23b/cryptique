
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Controller to create a new user
exports.createUser = async (req, res) => {
    try {
        const { formData } = req.body;
        var password = formData.password;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        formData.password = hashedPassword;

        const newUser = new User({
            formData
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Controller to get a user by ID
exports.getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne ({ email });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

