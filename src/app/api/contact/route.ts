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

    const gmailUser = process.env.GMAIL_USER?.trim();
    const rawPass = process.env.GMAIL_APP_PASSWORD?.trim();
    const cleanPass = rawPass ? rawPass.replace(/\s+/g, "") : "";

    const isPlaceholderOrMissing =
      !cleanPass ||
      cleanPass === "your-16-char-app-password-here" ||
      cleanPass.length < 16;

    if (!gmailUser || isPlaceholderOrMissing) {
      return NextResponse.json(
        {
          error: "Gmail App Password not yet configured in .env.local.",
          needsConfig: true,
        },
        { status: 503 }
      );
    }

    const alternateUser =
      gmailUser.includes("70")
        ? gmailUser.replace("70", "")
        : `${gmailUser.replace("@gmail.com", "")}70@gmail.com`;

    const sendWithUser = async (userToTry: string) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: userToTry,
          pass: cleanPass,
        },
      });

      return transporter.sendMail({
        from: `"Portfolio Contact" <${userToTry}>`,
        to: userToTry,
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
    };

    const candidateUsers = Array.from(
      new Set([
        gmailUser,
        "vinaybabannavar70@gmail.com",
        "vinaybabannavar07@gmail.com",
        "vinaybabannavar@gmail.com",
      ])
    );

    let sent = false;
    let lastError: any = null;

    for (const userToTry of candidateUsers) {
      try {
        await sendWithUser(userToTry);
        sent = true;
        break;
      } catch (err: any) {
        lastError = err;
        if (err?.code !== "EAUTH") {
          throw err;
        }
      }
    }

    if (!sent && lastError) {
      throw lastError;
    }

    return NextResponse.json({ success: true, message: "Message transmitted successfully." });
  } catch (error) {
    console.error("[Contact API] Send error:", error);
    const isAuthErr = (error as any)?.code === "EAUTH";
    return NextResponse.json(
      {
        error: isAuthErr
          ? "Google rejected credentials (535 Bad Credentials). Ensure the App Password was generated for vinaybabannavar70@gmail.com, or send instantly via the button below."
          : "Failed to send message. Please try again or dispatch via the button below.",
        isAuthErr,
      },
      { status: 500 }
    );
  }
}
