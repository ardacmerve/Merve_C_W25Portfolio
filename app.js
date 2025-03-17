const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, images, PDFs)
app.use(express.static(path.join(__dirname, "public")));
app.use("/pdfs", express.static(path.join(__dirname, "public/pdfs"))); // ✅ Serve PDFs

// Define routes to serve HTML from the `views/` folder
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views/index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "views/about.html")));
app.get("/projects", (req, res) => res.sendFile(path.join(__dirname, "views/projects.html")));
app.get("/capstone", (req, res) => res.sendFile(path.join(__dirname, "views/capstone.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "views/contact.html")));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
