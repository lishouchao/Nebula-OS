
import { GoogleGenAI } from "@google/genai";

// Fix: Use process.env.API_KEY directly in the constructor as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askNebula = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are Nebula AI, the intelligent core of the Nebula OS desktop environment. You help users manage their files, settings, and workflows. Be concise, futuristic, and helpful. Use markdown for formatting.",
      }
    });
    // Correct: response.text is a property, not a method
    return response.text || "I'm having trouble connecting to the core.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with AI Core.";
  }
};