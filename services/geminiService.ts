import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// The API key is guaranteed to be in process.env.API_KEY per environment setup
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Uses Gemini to refine a user's raw message into a professional business inquiry.
 * @param rawMessage The user's draft message.
 * @returns A promise resolving to the refined message string.
 */
export const refineMessageWithAI = async (rawMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a professional business communication assistant. 
      Rewrite the following draft inquiry to be more professional, clear, and concise 
      while maintaining the original intent. Do not add any introductory text like "Here is the rewritten version".
      Just provide the polished text.

      Draft: "${rawMessage}"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    const refinedText = response.text;
    return refinedText || rawMessage; // Fallback to original if empty
  } catch (error) {
    console.error("Error refining message with Gemini:", error);
    throw error;
  }
};
