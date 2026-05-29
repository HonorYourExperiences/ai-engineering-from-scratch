import { createWriteStream } from 'node:fs';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import sharp from 'sharp';
import { loadCardFiles } from '../src/exporters/loadCards';
import { inlineLocalImageHrefs } from '../src/exporters/portableSvg';
import { getCardSize } from '../src/renderers/layout';
import { renderWonderCardSvg } from '../src/renderers/svgTemplate';

await mkdir('exports/pdf', { recursive: true });
const cards = await loadCardFiles();
for (const { card } of cards) {
  const size = getCardSize(card.ratio);
  const svgPath = path.join('exports/svg', `${card.id}.svg`);
  const svg = await readFile(svgPath, 'utf8').catch(() => renderWonderCardSvg(card));
  const portableSvg = await inlineLocalImageHrefs(svg);
  const previewPng = await sharp(Buffer.from(portableSvg)).png().toBuffer();
  const output = path.join('exports/pdf', `${card.id}.pdf`);
  const doc = new PDFDocument({ size: [size.width, size.height], margin: 0 });
  doc.pipe(createWriteStream(output));
  doc.image(previewPng, 0, 0, { width: size.width, height: size.height });
  doc.end();
  console.log(`Wrote ${output}`);
}
