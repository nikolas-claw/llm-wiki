import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// 1. Setup - Use API Key from environment or fallback to existing OAuth token (if possible)
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY not found in environment.");
  console.log("Please get an API key from https://aistudio.google.com/ and run:");
  console.log("export GEMINI_API_KEY='your-key-here'");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const ROOT_DIR = path.resolve(__dirname, "..");
const RAW_DIR = path.join(ROOT_DIR, "raw");
const WIKI_DIR = path.join(ROOT_DIR, "wiki");
const ARCHIVE_DIR = path.join(RAW_DIR, "archive");

async function compileWiki() {
  const files = fs.readdirSync(RAW_DIR).filter(f => f.endsWith(".md") || f.endsWith(".txt"));
  
  if (files.length === 0) {
    console.log("No new raw notes to process.");
    return;
  }

  console.log(`Processing ${files.length} raw notes...`);

  for (const file of files) {
    const filePath = path.join(RAW_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    
    // Get list of existing wiki pages for context
    const existingWikiPages = fs.readdirSync(WIKI_DIR).filter(f => f.endsWith(".md"));

    const prompt = `
      You are an expert knowledge architect for an Andrej Karpathy style LLM Wiki.
      
      INPUT NOTE:
      ---
      ${content}
      ---
      
      EXISTING WIKI PAGES:
      ${existingWikiPages.join(", ")}
      
      TASK:
      1. Synthesize the input note into atomic, interlinked knowledge.
      2. If a matching wiki page exists, update it with new insights.
      3. If no matching page exists, create a new one with a clear title.
      4. Use [[Double Bracket]] wiki-links to link to OTHER existing pages.
      5. Output the result as a JSON array of objects: [{ "filename": "PageName.md", "content": "Markdown content..." }]
      
      CRITICAL: Return ONLY valid JSON.
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Basic JSON extraction (Gemini sometimes adds markdown blocks)
      const jsonStr = text.match(/\[[\s\S]*\]/)?.[0] || text;
      const updates = JSON.parse(jsonStr);

      for (const update of updates) {
        const outPath = path.join(WIKI_DIR, update.filename);
        fs.writeFileSync(outPath, update.content);
        console.log(`Updated/Created: ${update.filename}`);
      }

      // Archive processed file
      if (!fs.existsSync(ARCHIVE_DIR)) fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
      fs.renameSync(filePath, path.join(ARCHIVE_DIR, file));
      
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  console.log("Wiki compilation complete.");
}

compileWiki();
