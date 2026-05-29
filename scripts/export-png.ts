import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { loadCardFiles } from '../src/exporters/loadCards';
import { inlineLocalImageHrefs } from '../src/exporters/portableSvg';
import { renderWonderCardSvg } from '../src/renderers/svgTemplate';

await mkdir('exports/png', { recursive: true });
const cards = await loadCardFiles();
for (const { card } of cards) {
  const svgPath = path.join('exports/svg', `${card.id}.svg`);
  const svg = await readFile(svgPath, 'utf8').catch(() => renderWonderCardSvg(card));
  const portableSvg = await inlineLocalImageHrefs(svg);
  const output = path.join('exports/png', `${card.id}.png`);
  await sharp(Buffer.from(portableSvg)).png().toFile(output);
  console.log(`Wrote ${output}`);
}
