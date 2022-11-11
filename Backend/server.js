// Initialization
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');


const app = express();

// built-in middleWares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("uploads"))
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

// Listening to database
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Database connection established!'))
  .catch((err) => console.error('Failed to connect =>', err.name + ': ' + err.message))

// Listening to PORT
app.listen(port, () => console.log(`Server listening on: http://localhost:${port}`))