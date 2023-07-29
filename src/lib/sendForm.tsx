"use server";

import { FormData } from "@/types/contact";

async function sendForm(formData: FormData) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const sendgrid = require("@sendgrid/mail");
  apiKey && sendgrid.setApiKey(apiKey);
  const msg = {
    to: "divideproject.business@gmail.com",
    from: "divideproject.business@gmail.com",
    subject: "New Form Submission At www.divideproject.com",
    text: "New Form Submission At www.divideproject.com",
    html: `<strong>Full Name: ${formData.full_name}</strong><br />
        <strong>Email: ${formData.email}</strong><br />
        <strong>Budget: ${formData.budget}</strong><br />
        <strong>Description: ${formData.description}</strong>
      `,
  };
  sendgrid.send(msg);
}

export default sendForm;
