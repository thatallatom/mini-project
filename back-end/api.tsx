import express, { Request, Response } from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database configuration
const dbConfig = {
  host: "203.188.54.9",
  user: "u6411130034",
  password: "6411130034abc",
  database: "mini6411130034",
};

// Create a database connection pool
const pool = mysql.createPool(dbConfig);

// Define a route to retrieve data from the "DEPARTMENT" table
app.get("/api/departments", async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute("SELECT * FROM DEPARTMENT");
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define a route to retrieve data from the "EMPLOYEE" table
app.get("/api/employees", async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute("SELECT * FROM EMPLOYEE");
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
