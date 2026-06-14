import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function list() {
  try {
    // Note: The SDK might not have a direct listModels, we can try a dummy request
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("test");
    console.log("gemini-pro works");
  } catch (err) {
    console.error("Error with gemini-pro:", err.status);
  }
}
list();
