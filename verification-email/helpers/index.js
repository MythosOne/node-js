const nodemailer = require("nodemailer");

function sendEmail(email) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  return transport.sendMail({ ...email, from: "victor.avramidi@gmail.com" });
}

module.exports = { sendEmail };
