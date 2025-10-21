// "use server";

import { google } from "googleapis";

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  country: string;
  profession: string;
  specialization: string;
  dietaryRequirements: string;
}

export interface RegistrationResponse {
  success: boolean;
  error?: string;
}

// Verify required environment variables
if (!process.env.GOOGLE_CLIENT_EMAIL) {
  throw new Error("GOOGLE_CLIENT_EMAIL environment variable is not set");
}

if (!process.env.GOOGLE_PRIVATE_KEY) {
  throw new Error("GOOGLE_PRIVATE_KEY environment variable is not set");
}

if (!process.env.GOOGLE_SHEET_ID) {
  throw new Error("GOOGLE_SHEET_ID environment variable is not set");
}

function getFormattedPrivateKey() {
  const key = process.env.GOOGLE_PRIVATE_KEY;
  if (!key)
    throw new Error("GOOGLE_PRIVATE_KEY environment variable is not set");

  return key.replace(/\\n/g, "\n");
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: getFormattedPrivateKey(),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const sheets = google.sheets({ version: "v4", auth });
export const SHEET_ID = process.env.GOOGLE_SHEET_ID;


export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    console.log("Checking if email exists:", email);
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!C:C", // Column C contains emails
    });

    const rows = response.data.values || [];
    
    // Check if email exists in any row (skip header row)
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] && rows[i][0].toLowerCase().trim() === email.toLowerCase().trim()) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error("Error checking email:", error);
    return false; // Return false on error to allow registration to proceed
  }
}

export async function createRegistration(
  registration: RegistrationData
): Promise<RegistrationResponse> {
  try {
    const timestamp = new Date().toISOString();
    console.log("Adding Registration:", registration);
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:J", // Using Sheet1 as default sheet name
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            registration.firstName,        // A: First Name
            registration.lastName,         // B: Last Name
            registration.email,            // C: Email
            registration.phone,            // D: Phone
            registration.institution,      // E: Institution
            registration.country,          // F: Country
            registration.profession,       // G: Profession
            registration.specialization,   // H: Specialization
            registration.dietaryRequirements, // I: Dietary Requirements
            timestamp,                     // J: Timestamp
          ],
        ],
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating registration:", error);
    return {
      success: false,
      error: "Failed to create registration",
    };
  }
}

