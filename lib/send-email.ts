import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_9BeRSFNb_BNhmYBAXPVExXiJAw7t1zsNQ");

export const sendEmail = async (
  to: string,
  subject: string,
  emailTemplate: React.ReactNode,
) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    text: "",
    react: emailTemplate,
  });

  if (error) {
    throw error;
  }

  return data;
};
