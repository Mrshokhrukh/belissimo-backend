const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
  try {
    mongoose
      .connect(
        'mongodb+srv://shokhrukhdot:Q783i8DZKvfUEml1@cluster0.wembva0.mongodb.net/',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log('Connected...'))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDb;
