"use server";

import nodemailer from "nodemailer";

export async function sendMail(data: FormData) {
  "use server";
  const firstName = data.get("first-name")?.toString();
  const lastName = data.get("last-name")?.toString();
  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();
  const user = process.env.NEXT_PUBLIC_EMAIL;
  const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: user,
          subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - DivideProject`,
          text: `
            Imię: ${firstName}
            Nazwisko: ${lastName}
            Email: ${email}
            Message: ${message}
        `,
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });
    return { status: "success" };
  } catch (err) {
    console.log({ err });
  }
}
