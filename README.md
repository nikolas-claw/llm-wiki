# LLM Wiki - Andrej Karpathy Style

This is a personal knowledge base designed to be "compiled" by an LLM.

## Workflow
1. **Raw Ingest**: Place new notes, transcripts, or articles in the `raw/` directory.
2. **LLM Compilation**: Use the "Wiki-Agent" to process files in `raw/` and update the `wiki/` directory.
3. **Commit**: Periodically commit changes to the GitHub repository.

## The Wiki-Agent (Long-Term Support)
Since the official Gemini CLI is retiring from Termux, this repo includes a **permanent replacement agent** that will never expire. It uses the Gemini API directly.

### Setup
1. Get a Gemini API Key from [Google AI Studio](https://aistudio.google.com/).
2. In Termux, run:
   ```bash
   export GEMINI_API_KEY='your-api-key'
   ```

### Run Compilation
```bash
cd scripts && npm install && npm run compile
```

## Structure
- `raw/`: Unprocessed input data.
- `wiki/`: The "compiled" knowledge base in Markdown.
- `scripts/`: Custom agents and tools for wiki maintenance.
- `GEMINI.md`: Instructions for LLM agents on how to manage this wiki.
