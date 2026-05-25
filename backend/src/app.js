const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/test.routes");
const errorMiddleware = require("./middleware/errorMiddleware");
const navbarRoutes = require("./routes/navbar.routes");
const heroRoutes = require("./routes/hero.routes");
const servicesRoutes = require("./routes/services.routes");
const howItWorksRoutes = require("./routes/howItWorks.routes");
const industriesRoutes = require("./routes/industries.routes");
const pricingRoutes = require("./routes/pricing.routes");
const aboutRoutes = require("./routes/about.routes");
const contactRoutes = require("./routes/contact.routes");
const footerRoutes = require("./routes/footer.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/test", testRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/how-it-works", howItWorksRoutes);
app.use("/api/industries", industriesRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/footer", footerRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
