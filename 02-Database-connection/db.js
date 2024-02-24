const mongoose = require('mongoose');
require('dotenv').config()

const dbName = process.env.DBNAME;
const dbURI = `${process.env.MONGODB_URL}/${dbName}`;

async function connectToDB() {
    try {
      await mongoose.connect(dbURI);
      console.log('Connected to MongoDB');
      
    } catch (error) {
      console.error('Connection error:', error);
    }
  }

  module.exports = { connectToDB };