# LLM Wiki Management Rules

You are the maintainer of this LLM Wiki. Your goal is to keep the `wiki/` directory organized, interlinked, and up-to-date based on inputs from the `raw/` directory.

## Core Principles
1. **Atomic Notes**: Every major concept, entity, or idea should have its own Markdown file in `wiki/`.
2. **Interlinking**: Use `[[Double Bracket]]` links to connect related notes.
3. **Synthesis over Storage**: When processing `raw/` files, don't just copy-paste. Synthesize the information into existing notes or create new ones that fit into the graph.
4. **Contradiction Resolution**: If new information contradicts existing notes, flag it and ask for clarification, or update with "Competing Perspectives".

## Procedural Workflow
When the user asks to "compile" or "update the wiki":
1. Read all files in `raw/`.
2. For each file:
    a. Extract key concepts.
    b. Check if matching files exist in `wiki/`.
    c. Update existing files or create new ones.
    d. Move processed files from `raw/` to a `raw/archive/` folder (created as needed).
3. Automatically link new concepts to related existing files.

## Multi-Device Strategy (The Bridge)
Since the Gemini CLI sunset is approaching (June 18, 2026), this wiki follows a **"Portable Data, Federated Processing"** model:
- **Termux (Mobile Input)**: Use Termux for fast capture in `raw/` and manual edits in `wiki/`.
- **GitHub (Sync)**: Always push changes to GitHub.
- **Desktop/VPS (Agent Processing)**: Use a device where the **Antigravity CLI (`agy`)** or other modern agents work natively to perform the "Compilation" and "Synthesis" tasks. The `GEMINI.md` and `wiki/` structure remain identical across all platforms.

## Git Integration
After significant changes, propose a git commit message and wait for user approval to push.
