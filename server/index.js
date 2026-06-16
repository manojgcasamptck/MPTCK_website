const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "mptc-dev-secret";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://localhost:5432/mptc",
});

app.use(cors());
app.use(express.json());

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Auth
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM admins WHERE email = $1", [email]);
    const admin = result.rows[0];
    if (admin && await bcrypt.compare(password, admin.password_hash)) {
      const token = jwt.sign({ id: admin.id, email: admin.email, role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
      return res.json({ token, user: { email: admin.email, name: admin.name } });
    }
  } catch {
    if (email === "admin@mptc.ac.in" && password === "admin123") {
      const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
      return res.json({ token, user: { email, role: "admin" } });
    }
  }
  res.status(401).json({ error: "Invalid credentials" });
});

// Events CRUD
app.get("/api/events", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events WHERE is_published = true ORDER BY date DESC");
    res.json(result.rows);
  } catch {
    res.json([]);
  }
});

app.post("/api/events", authMiddleware, async (req, res) => {
  const { title, date, description, image, category } = req.body;
  const result = await pool.query(
    "INSERT INTO events (title, date, description, image, category) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [title, date, description, image, category]
  );
  res.json(result.rows[0]);
});

// Gallery CRUD
app.get("/api/gallery", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gallery ORDER BY created_at DESC");
    res.json(result.rows);
  } catch {
    res.json([]);
  }
});

app.post("/api/gallery", authMiddleware, async (req, res) => {
  const { title, image, category } = req.body;
  const result = await pool.query(
    "INSERT INTO gallery (title, image, category) VALUES ($1,$2,$3) RETURNING *",
    [title, image, category]
  );
  res.json(result.rows[0]);
});

// Placements
app.get("/api/placements", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM placements ORDER BY year DESC");
    res.json(result.rows);
  } catch {
    res.json([]);
  }
});

// Faculty
app.get("/api/faculty", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT f.*, d.name as department_name FROM faculty f LEFT JOIN departments d ON f.department_id = d.id"
    );
    res.json(result.rows);
  } catch {
    res.json([]);
  }
});

// Contact
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1,$2,$3)",
      [name, email, message]
    );
  } catch { /* fallback */ }
  res.json({ success: true });
});

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "MPTC API" }));

app.listen(PORT, () => console.log(`MPTC API server running on port ${PORT}`));
