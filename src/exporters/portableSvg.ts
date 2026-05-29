import { readFile } from 'node:fs/promises';
import path from 'node:path';

function mimeFor(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  if (extension === '.svg') return 'image/svg+xml';
  if (extension === '.png') return 'image/png';
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg';
  return 'application/octet-stream';
}

function filePathFromHref(href: string): string | null {
  if (href.startsWith('data:') || href.startsWith('http://') || href.startsWith('https://')) return null;
  return href.startsWith('/') ? href.slice(1) : href;
}

export async function inlineLocalImageHrefs(svg: string): Promise<string> {
  const hrefPattern = /href="([^"]+)"/g;
  let portableSvg = svg;
  const replacements = await Promise.all(
    Array.from(svg.matchAll(hrefPattern), async (match) => {
      const originalHref = match[1];
      const filePath = filePathFromHref(originalHref);
      if (!filePath) return null;
      try {
        const buffer = await readFile(filePath);
        const dataUri = `data:${mimeFor(filePath)};base64,${buffer.toString('base64')}`;
        return { original: `href="${originalHref}"`, replacement: `href="${dataUri}"` };
      } catch {
        return null;
      }
    }),
  );

  for (const replacement of replacements) {
    if (replacement) {
      portableSvg = portableSvg.replaceAll(replacement.original, replacement.replacement);
    }
  }
  return portableSvg;
}
