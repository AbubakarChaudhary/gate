"use server";

import { createRegistration, checkEmailExists, RegistrationData, RegistrationResponse } from "./google-sheets";
import { sendRegistrationConfirmation } from "./brevo-email";

export async function checkEmailRegistration(email: string): Promise<{ exists: boolean }> {
  try {
    const exists = await checkEmailExists(email);
    return { exists };
  } catch (error) {
    console.error("Error in checkEmailRegistration:", error);
    return { exists: false };
  }
}

export async function submitRegistration(
  registrationData: RegistrationData
): Promise<RegistrationResponse> {
  try {
    // First check if email already exists
    const emailCheck = await checkEmailExists(registrationData.email);
    if (emailCheck) {
      return {
        success: false,
        error: "EMAIL_EXISTS",
      };
    }

    // Create registration in Google Sheets
    const result = await createRegistration(registrationData);
    
    if (result.success) {
      // Send confirmation email
      const fullName = `${registrationData.firstName} ${registrationData.lastName}`;
      const emailResult = await sendRegistrationConfirmation({
        to: registrationData.email,
        name: fullName,
        subject: "Registration Confirmation - GATE 2025 Conference",
      });

      if (!emailResult.success) {
        console.error("Failed to send confirmation email:", emailResult.error);
        // Note: We still return success for registration even if email fails
        // The registration is saved, just the email notification failed
      } else {
        console.log("Confirmation email sent successfully:", emailResult.messageId);
      }
    }

    return result;
  } catch (error) {
    console.error("Error in submitRegistration:", error);
    return {
      success: false,
      error: "Failed to submit registration",
    };
  }
}
