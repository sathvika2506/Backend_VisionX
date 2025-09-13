const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_here",
  dbUri: process.env.DB_URI || "postgres://user:pass@localhost:5432/dbname",
};
