const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post("/sendmail", (req, res) => {
  const { name, email, message } = req.body;

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
    subject: "Websitenden yeni bir mesajın var!",
    html: `Gönderenin adı: ${name} <br/> Gönderenin maili: ${email} <br/> Gönderenin mesajı: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send(
    `Gönderenin adı: ${name} <br/> Gönderenin maili: ${email} <br/> Gönderenin mesajı: ${message}`
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
