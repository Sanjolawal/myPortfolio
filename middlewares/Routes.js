const express = require("express");
const router = express.Router();
const {
  getProjects,
  getBlogs,
  sendEmail,
  blogDetail,
} = require(`./middlewares.js`);

router.get(`/api/projects`, getProjects);
router.get(`/api/blogs`, getBlogs);
router.get(`/blogs/:_id`, blogDetail);
router.post(`/api/email`, sendEmail);

module.exports = router;
