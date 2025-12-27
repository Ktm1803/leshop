
import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI client using strict named parameter and process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIFitRecommendation = async (height: number, weight: number, product: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User height: ${height}cm, weight: ${weight}kg. For a ${product}, what is the best estimated size (XS, S, M, L, XL)? Reply with only the size and a one-sentence reason.`,
    });
    // Use .text property to access extracted text.
    return response.text || "Size S (Estimated)";
  } catch (error) {
    console.error("AI Size Error:", error);
    return "Size S (Default)";
  }
};

export const getAIShadeMatch = async (imageBase64: string) => {
  try {
    // Multi-part content must be structured within a 'parts' array inside an object.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: imageBase64,
            },
          },
          { text: "Analyze the skin tone in this image and recommend a foundation shade name (e.g., '3.5 Light Neutral'). Provide just the shade name." }
        ],
      },
    });
    // Use .text property to access extracted text.
    return response.text || "3.5 Light Neutral";
  } catch (error) {
    console.error("AI Shade Error:", error);
    return "3.5 Light Neutral";
  }
};
