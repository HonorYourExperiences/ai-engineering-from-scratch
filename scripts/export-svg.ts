import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadCardFiles } from '../src/exporters/loadCards';
import { renderWonderCardSvg } from '../src/renderers/svgTemplate';

await mkdir('exports/svg', { recursive: true });
const cards = await loadCardFiles();
for (const { card } of cards) {
  const svg = renderWonderCardSvg(card);
  const output = path.join('exports/svg', `${card.id}.svg`);
  await writeFile(output, svg, 'utf8');
  console.log(`Wrote ${output}`);
}
