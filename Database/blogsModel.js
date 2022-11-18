const mongoose = require(`../app`);

const blogSchema = mongoose.Schema({});

const blogInterface = mongoose.model(`blog`, blogSchema);

module.exports = blogInterface;
