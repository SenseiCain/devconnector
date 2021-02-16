const express = require('express');
const app = express();

const connectDB = require('./config/db');

// Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }))

// Define Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));