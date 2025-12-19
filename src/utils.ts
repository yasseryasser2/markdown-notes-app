import fs = require("node:fs/promises");
function generateNoteId(): string {
  return Math.random().toString(36).substring(2, 9) + "_" + Date.now();
}

function sanitizeFilename(title: string): string {
  return title
    .toLowerCase()
    .replace(/^a-z0-9/g, "")
    .replace(/\s+/g, "-");
}

async function readNoteFile(filepath: string): Promise<string> {
  try {
    return await fs.readFile(filepath, "utf-8");
  } catch (error) {
    return "";
  }
}

async function writeNoteFile(filepath: string, content: string): Promise<void> {
  try {
    return await fs.writeFile(filepath, content, "utf-8");
  } catch (error) {}
}
