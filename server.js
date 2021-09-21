const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "krokenn34@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

const mailOptions = {
  from: "krokenn34@gmail.com",
  to: "krokenn34@gmail.com",
  subject: "Account Verification",
  text: "That was easy!",
  html: "<p>xdxd</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
