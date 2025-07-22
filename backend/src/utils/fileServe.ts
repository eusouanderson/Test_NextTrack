import fs from 'fs/promises';

export async function serveFile(c: any, filePath: string, contentType: string) {
  try {
    const file = await fs.readFile(filePath);
    return c.body(file, 200, {
      'Content-Type': contentType,
    });
  } catch {
    return c.text('File not found', 404);
  }
}
