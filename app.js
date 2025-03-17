const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, images, PDFs)
app.use(express.static(path.join(__dirname, "public")));
app.use("/pdfs", express.static(path.join(__dirname, "public/pdfs"))); // ✅ Serve PDFs

// Serve HTML files from the root directory
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "about.html")));
app.get("/projects", (req, res) => res.sendFile(path.join(__dirname, "projects.html")));
app.get("/capstone", (req, res) => res.sendFile(path.join(__dirname, "capstone.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "contact.html"))); // ✅ Updated Contact Page Route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
