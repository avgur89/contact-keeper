const express = require('express');
const connectDB = require('./config/db');

const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', users);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the ContactKeeper API' });
});

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
