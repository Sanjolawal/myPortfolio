const express = require("express");
const router = express.Router();
const { getProjects, getBlogs, sendEmail } = require(`./middlewares.js`);

router.get(`/api/projects`, getProjects);
router.get(`/api/blogs`, getBlogs);
router.post(`/api/email`, sendEmail);

module.exports = router;
