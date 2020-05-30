const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const nodemailer = require("nodemailer");
//const mailing = require("./sendmail");

// Validate the audience and the issuer.
//audience: process.env.REACT_APP_AUTH0_AUDIENCE,
//issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

function sendMail(sname, scontact, father, fcontact, forclass) {
  const text = `student name : ${sname} contact number ${scontact} son of ${father} contact no. ${fcontact} for class : ${forclass}`;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kumarsanjiv0005@gmail.com",
      pass: "$@tiy@0005",
    },
  });

  var mailOptions = {
    from: "kumarsanjiv0005@gmail.com",
    to: "ksanjiv0005@gmail.com",
    subject: "New Addmission ",
    text: text,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return "error";
    } else {
      console.log("Email sent: " + info.response);
      return "success";
    }
  });
}

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from a public API!",
  });
});

app.post("/mail", function(req, res) {
  console.log(req.body);
  const student = req.body;
  const status = sendMail(
    student.name,
    student.contactyour,
    student.father,
    student.contactfather,
    student.class
  );

  res.json({
    message: status,
  });
});

app.listen(3001);
console.log("API server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE);
