import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { from, to, subject, html } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
