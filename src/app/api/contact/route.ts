import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      // Env vars not set — degrade gracefully with a 503
      return NextResponse.json(
        { error: "Email service not configured. Please contact vinaybabannavar@gmail.com directly." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: "vinaybabannavar@gmail.com",
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject} — ${name}`,
      html: `
        <div style="font-family: monospace; background:#0B0C0A; color:#F1F0E8; padding:32px; border-radius:8px; max-width:600px;">
          <div style="border-bottom:1px solid #2a2b28; padding-bottom:16px; margin-bottom:24px;">
            <span style="color:#D4FF4F; font-size:12px; text-transform:uppercase; letter-spacing:2px;">
              [PORTFOLIO_CONTACT // INCOMING_TRANSMISSION]
            </span>
          </div>
          <table style="width:100%; font-size:14px; border-collapse:collapse;">
            <tr>
              <td style="color:#92958B; padding:8px 0; width:120px;">FROM</td>
              <td style="color:#F1F0E8; font-weight:bold;">${name}</td>
            </tr>
            <tr>
              <td style="color:#92958B; padding:8px 0;">REPLY TO</td>
              <td style="color:#D4FF4F;">${email}</td>
            </tr>
            <tr>
              <td style="color:#92958B; padding:8px 0;">SUBJECT</td>
              <td style="color:#F1F0E8;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top:24px; padding:20px; background:#141612; border-radius:6px; border:1px solid #2a2b28;">
            <div style="color:#92958B; font-size:12px; margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">MESSAGE</div>
            <div style="color:#F1F0E8; line-height:1.7; white-space:pre-wrap;">${message}</div>
          </div>
          <div style="margin-top:24px; font-size:11px; color:#92958B; border-top:1px solid #2a2b28; padding-top:16px;">
            Sent from Vinay Babannavar portfolio — vinaybabannavar.dev
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message transmitted successfully." });
  } catch (error) {
    console.error("[Contact API] Send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
