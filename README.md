# LLM Wiki - Andrej Karpathy Style

This is a personal knowledge base designed to be "compiled" by an LLM.

## Workflow
1. **Raw Ingest**: Place new notes, transcripts, or articles in the `raw/` directory.
2. **LLM Compilation**: Use the Gemini CLI to process files in `raw/` and update the `wiki/` directory.
3. **Commit**: Periodically commit changes to the GitHub repository.

## Structure
- `raw/`: Unprocessed input data.
- `wiki/`: The "compiled" knowledge base in Markdown.
- `GEMINI.md`: Instructions for the Gemini CLI on how to manage this wiki.
