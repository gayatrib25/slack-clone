const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 9000;

mongoose.connect("mongodb://mongo:27017/slack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use(cors());
app.use(express.json());

const User = mongoose.model("User", new mongoose.Schema({
  email: String,
  password: String,
  image: String
}));

app.post("/register", async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  res.json(user);
});

app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));

