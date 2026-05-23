const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/test.routes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/test", testRoutes);

const navbarRoutes = require("./routes/navbar.routes");

app.use("/api/navbar", navbarRoutes);

const heroRoutes = require("./routes/hero.routes");

app.use("/api/hero", heroRoutes);

const servicesRoutes = require("./routes/services.routes");

app.use("/api/services", servicesRoutes);

const howItWorksRoutes = require("./routes/howItWorks.routes");

app.use("/api/how-it-works", howItWorksRoutes);

const industriesRoutes = require("./routes/industries.routes");

app.use("/api/industries", industriesRoutes);

const pricingRoutes = require("./routes/pricing.routes");

app.use("/api/pricing", pricingRoutes);

const aboutRoutes = require("./routes/about.routes");

app.use("/api/about", aboutRoutes);

const contactRoutes = require("./routes/contact.routes");

app.use("/api/contact", contactRoutes);

const footerRoutes = require("./routes/footer.routes");

app.use("/api/footer", footerRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error Middleware
app.use(errorMiddleware);

module.exports = app;