"use server";

import * as brevo from "@getbrevo/brevo";

// Verify required environment variable
if (!process.env.BREVO_API_KEY) {
  throw new Error("BREVO_API_KEY environment variable is not set");
}

// Initialize Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

export interface SendEmailParams {
  to: string;
  name: string;
  subject: string;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
  messageId?: string;
}

export async function sendRegistrationConfirmation(
  params: SendEmailParams
): Promise<EmailResponse> {
  try {
    console.log("Sending registration confirmation email to:", params.to);
    console.log("Brevo API Key exists:", !!process.env.BREVO_API_KEY);
    console.log("Brevo API Key length:", process.env.BREVO_API_KEY?.length);

    const sendSmtpEmail = new brevo.SendSmtpEmail();

    // Sender information
    sendSmtpEmail.sender = {
      name: "GATE 2025 Conference",
      email: "noreply@ksagate.org", // Update this to your verified sender email
    };

    // Recipient
    sendSmtpEmail.to = [
      {
        email: params.to,
        name: params.name,
      },
    ];

    // Email subject
    sendSmtpEmail.subject = params.subject;

    // HTML email template
    sendSmtpEmail.htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GATE 2025 Registration Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">

          <!-- Header with blue background -->
          <tr>
            <td style="background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">GATE 2025</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Global Summit of Advanced & Third Space Endoscopy</p>
            </td>
          </tr>

          <!-- Success Icon -->
          <tr>
            <td align="center" style="padding: 30px 0 0 0;">
              <div style="width: 60px; height: 60px; background-color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center;">
                <span style="color: white; font-size: 30px; text-align: center;">✓</span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 20px 40px 40px 40px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; text-align: center;">Registration Confirmed!</h2>

              <p style="color: #4b5563; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">Dear ${params.name},</p>

              <p style="color: #4b5563; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">
                We are truly delighted to confirm your participation in the GATE Conference.
              </p>

              <p style="color: #4b5563; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">
                As you know, the event is set to take place from the <strong>13th to the 15th of November, 2025</strong>, at the <strong>Crowne Plaza Riyadh Rdc Hotel</strong> in Riyadh.
              </p>

              <!-- Event Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 4px; margin: 20px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="color: #0ea5e9; margin: 0 0 15px 0; font-size: 18px;">Event Information</h3>
                    <p style="color: #1f2937; margin: 5px 0; font-size: 14px;"><strong>📅 Dates:</strong> November 13-15, 2025</p>
                    <p style="color: #1f2937; margin: 5px 0; font-size: 14px;"><strong>📍 Venue:</strong> Crowne Plaza Riyadh Rdc Hotel, Riyadh</p>
                    <p style="color: #1f2937; margin: 5px 0; font-size: 14px;"><strong>🕘 Time:</strong> 8:30 AM onwards</p>
                  </td>
                </tr>
              </table>

              <p style="color: #4b5563; line-height: 1.6; margin: 20px 0 15px 0; font-size: 16px;">
                For your convenience, you may view the hotel's location below:
              </p>

              <!-- Location Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                <tr>
                  <td align="center">
                    <a href="https://maps.app.goo.gl/nJ7qFBMLbDxjeSiY9?g_st=ipc"
                       style="display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                      📍 View Location on Maps
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color: #4b5563; line-height: 1.6; margin: 20px 0 15px 0; font-size: 16px;">
                We look forward to welcoming you and are committed to making this a truly enriching and engaging experience for all attendees.
              </p>

              <p style="color: #4b5563; line-height: 1.6; margin: 15px 0 0 0; font-size: 16px;">
                Warm regards,<br>
                <strong>Organizing Committee, GATE 2025</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                      <strong>Contact Information</strong>
                    </p>
                    <p style="color: #6b7280; font-size: 13px; margin: 5px 0;">
                      📧 Email: <a href="mailto:info@ksagate.org" style="color: #0ea5e9; text-decoration: none;">info@ksagate.org</a>
                    </p>
                    <p style="color: #6b7280; font-size: 13px; margin: 5px 0;">
                      📞 Phone: <a href="tel:+966114420795" style="color: #0ea5e9; text-decoration: none;">+966 11 442 0795</a>
                    </p>
                    <p style="color: #6b7280; font-size: 13px; margin: 5px 0;">
                      🌐 Website: <a href="https://www.ksagate.org" style="color: #0ea5e9; text-decoration: none;">www.ksagate.org</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 20px;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                      © ${new Date().getFullYear()} GATE 2025. All rights reserved.<br>
                      King Faisal Specialist Hospital & Research Centre, Riyadh, Saudi Arabia
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Plain text version as fallback
    sendSmtpEmail.textContent = `
Dear ${params.name},

We are truly delighted to confirm your participation in the GATE Conference.

As you know, the event is set to take place from the 13th to the 15th of November, 2025, at the Crowne Plaza Riyadh Rdc Hotel in Riyadh.

EVENT INFORMATION:
📅 Dates: November 13-15, 2025
📍 Venue: Crowne Plaza Riyadh Rdc Hotel, Riyadh
🕘 Time: 8:30 AM onwards

For your convenience, you may view the hotel's location here:
https://maps.app.goo.gl/nJ7qFBMLbDxjeSiY9?g_st=ipc


We look forward to welcoming you and are committed to making this a truly enriching and engaging experience for all attendees.

Warm regards,
Organizing Committee, GATE 2025

---
Contact Information:
📧 Email: info@ksagate.org
📞 Phone: +966 11 442 0795
🌐 Website: www.ksagate.org

© ${new Date().getFullYear()} GATE 2025. All rights reserved.
King Faisal Specialist Hospital & Research Centre, Riyadh, Saudi Arabia
    `;

    // Send the email
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Brevo API Response:", JSON.stringify(result, null, 2));
    console.log("Email sent successfully. Message ID:", result.body?.messageId || result.messageId);

    return {
      success: true,
      messageId: result.body?.messageId || result.messageId || "sent",
    };
  } catch (error: any) {
    console.error("Error sending email - Full error:", error);
    console.error("Error response:", error.response?.body);
    console.error("Error status:", error.response?.statusCode);
    return {
      success: false,
      error: error.response?.body?.message || error.message || "Failed to send email",
    };
  }
}

