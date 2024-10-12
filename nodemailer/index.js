require("dotenv").config();

const nodemailer = require("nodemailer");


var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

transport
  .sendMail({
    to: "mythosdark@gmail.com",
    from: "victor.avramidi@gmail.com",
    subject: "Hello",
    text: "Hello, Mythos!",
    html: "<strong>Hello, Mythos!</strong>",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
