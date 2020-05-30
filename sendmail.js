var nodemailer = require("nodemailer");

export function sendMail(sname, scontact, father, fcontact, forclass) {
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
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
