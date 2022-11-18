const projectInterface = require(`../Database/skillModel`);
const blogInterface = require(`../Database/blogsModel`);
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const getProjects = async (req, res) => {
  try {
    const response = await projectInterface.find({});
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
const getBlogs = async (req, res) => {
  try {
    const response = await blogInterface.find({});
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = async (req, res) => {
  const { name, email, service, budget, textArea } = req.body;
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "sanjolawal600@gmail.com",
        pass: process.env.mailpassword,
      },
    })
  );

  var mailOptions = {
    from: " sanjolawal600@gmail.com",
    to: "sanjo3019@gmail.com",
    subject: "Your " + service + " skill is needed",
    text:
      "Hello I'm " +
      name +
      ", and my email is " +
      email +
      ", " +
      " our budget is " +
      budget +
      "." +
      "  " +
      textArea,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send(`form sent successfully`);
};

module.exports = { getProjects, getBlogs, sendEmail };
