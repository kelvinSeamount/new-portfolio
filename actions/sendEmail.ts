"use server";
import { getError, validateMessage } from "@/app/lib/utils";
import { Resend } from "resend";

//initaite the process for the API KEY

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateMessage(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateMessage(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "kelvinnwachukwu89@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getError(error),
    };
  }
};
