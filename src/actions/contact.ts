'use server';

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

export async function sendMail(data: FormData) {
    const firstName = data.get("first-name")?.toString();
    const lastName = data.get("last-name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();
    try {
        const resp = await sgMail.send({
            from: "divideproject.business@gmail.com",
            to: "divideproject.business@gmail.com",
            subject: `New form submission from ${firstName} ${lastName}`,
            text: `
                Full Name: ${firstName} ${lastName}
                Email: ${email}
                Message: ${message}
            `,
        })
        return resp[0].statusCode
    } catch(err) {
        return err;
    }
}