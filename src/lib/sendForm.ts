"use server";

import { FormData } from "@/types/contact";

export async function sendForm(formData: FormData) {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((err: any) => {
        console.log(err);
      });
} 