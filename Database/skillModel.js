const mongoose = require(`../app`);

const projectSchema = mongoose.Schema({});

const projectInterface = mongoose.model(`project`, projectSchema);

module.exports = projectInterface;
