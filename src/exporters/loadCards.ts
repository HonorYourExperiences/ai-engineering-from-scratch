import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import type { WonderCardData } from '../types';

export async function loadCardFiles(root = 'data'): Promise<Array<{ file: string; card: WonderCardData }>> {
  const editions = await readdir(root, { withFileTypes: true });
  const cards: Array<{ file: string; card: WonderCardData }> = [];
  for (const edition of editions) {
    if (!edition.isDirectory()) continue;
    const dir = path.join(root, edition.name);
    const files = await readdir(dir);
    for (const fileName of files.filter((file) => file.endsWith('.json'))) {
      const file = path.join(dir, fileName);
      const raw = await readFile(file, 'utf8');
      cards.push({ file, card: JSON.parse(raw) as WonderCardData });
    }
  }
  return cards;
}
