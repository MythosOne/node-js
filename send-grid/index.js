require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail
  .send({
    to: "mythosdark@gmail.com",
    from: "victor.avramidi@gmail.com",
    subject: "Hello, Mythos!",
    text: "Hello, World!",
    html: "<strong>Hello, World!</strong>"
  })
  .then((res) => console.log('Email sent successfully', res))
  .catch((err) => console.error('Error sending email:', err.response ? err.response.body : err));
