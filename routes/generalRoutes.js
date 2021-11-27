const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home", active: { Home: true } });
});

router.get("/contact", (req, res) => {
  res.render("contactus", { active: { Contact: true } });
});

router.get("/services", (req, res) => {
  res.render("courses", { title: "Courses", active: { Services: true } });
});

router.get("/products", (req, res) => {
  res.render("products", { active: { Products: true } });
});

router.get("/about", (req, res) => {
  res.render("about-us", { active: { About: true } });
});

router.get("/*", (req, res) => {
  res.render("404");
});

module.exports = router;
