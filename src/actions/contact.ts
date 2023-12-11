"use server";

import sgMail from "@sendgrid/mail";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || "");

export async function sendMail(data: FormData) {
  const firstName = data.get("first-name")?.toString();
  const lastName = data.get("last-name")?.toString();
  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();
  const supabase = createServerActionClient({ cookies });
  try {
    await supabase.from("messages").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      message,
    });
    const response = await sgMail.send({
      from: "divideproject.business@gmail.com",
      to: "divideproject.business@gmail.com",
      subject: `New form submission from ${firstName} ${lastName}`,
      text: `
                Full Name: ${firstName} ${lastName}
                Email: ${email}
                Message: ${message}
            `,
    });
    return { status: "success" };
  } catch (err) {
    return { status: "failure", error: err };
  }
}
