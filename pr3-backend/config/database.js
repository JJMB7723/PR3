// config/database.js – Sequelize + PostgreSQL connection
// -------------------------------------------------------
// Creates and exports a Sequelize instance using credentials
// from the .env file. Does NOT sync or alter the database.

require('dotenv').config();
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,     // database name: PR3
  process.env.DB_USER,     // username: postgres
  process.env.DB_PASSWORD, // password: provided via .env
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false, // disable SQL query logging in console for clean output
  }
);

// Function to test the database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to PostgreSQL:', error.message);
    // Exit process with failure if DB connection cannot be established
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
