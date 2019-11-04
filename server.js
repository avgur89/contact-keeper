const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the ContactKeeper API' });
});

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
