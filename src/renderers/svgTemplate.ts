import type { WonderCardData } from '../types';
import { getCardSize } from './layout';

function esc(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function lines(text: string, max = 34): string[] {
  const words = text.split(/\s+/);
  const out: string[] = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      out.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) out.push(line);
  return out;
}

export function renderWonderCardSvg(card: WonderCardData): string {
  const { width, height } = getCardSize(card.ratio);
  const palette = {
    background: card.palette?.background ?? '#fff8ea',
    accent: card.palette?.accent ?? '#7b61ff',
    panel: card.palette?.panel ?? '#ffffff',
    ink: card.palette?.ink ?? '#182033',
  };
  const factRows = card.quickFacts
    .map((fact, index) => {
      const y = 650 + index * 68;
      return `<g><circle cx="105" cy="${y - 9}" r="18" fill="${palette.accent}"/><text x="140" y="${y - 18}" font-size="24" font-weight="700" fill="${palette.ink}">${esc(fact.label)}</text><text x="140" y="${y + 15}" font-size="27" fill="${palette.ink}">${esc(fact.value)}</text></g>`;
    })
    .join('\n');
  const tryLines = lines(card.tryThis, 43)
    .slice(0, 3)
    .map((line, index) => `<text x="90" y="${958 + index * 34}" font-size="25" fill="${palette.ink}">${esc(line)}</text>`)
    .join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(card.title)} WonderCard" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="42" fill="${palette.background}"/>
  <rect x="38" y="38" width="${width - 76}" height="${height - 76}" rx="34" fill="none" stroke="${palette.accent}" stroke-width="14"/>
  <rect x="72" y="95" width="${width - 144}" height="410" rx="28" fill="#ffffff88" stroke="${palette.accent}" stroke-width="4"/>
  <circle cx="${width / 2}" cy="300" r="145" fill="${palette.accent}" opacity="0.18"/>
  <image href="${esc(card.heroImage.src)}" x="92" y="115" width="${width - 184}" height="370" preserveAspectRatio="xMidYMid slice" aria-label="${esc(card.heroImage.alt)}"/>
  <text x="${width / 2}" y="488" text-anchor="middle" font-size="18" font-weight="700" fill="${palette.ink}">${esc(card.heroImage.alt)}</text>
  <rect x="65" y="60" width="${width - 130}" height="142" rx="26" fill="${palette.panel}" filter="drop-shadow(0 8px 16px #00000022)"/>
  <text x="${width / 2}" y="123" text-anchor="middle" font-size="54" font-weight="900" fill="${palette.ink}">${esc(card.title)}</text>
  <text x="${width / 2}" y="169" text-anchor="middle" font-size="25" fill="${palette.ink}">${esc(card.subtitle)}</text>
  <rect x="65" y="548" width="${width - 130}" height="260" rx="26" fill="${palette.panel}"/>
  ${factRows}
  <rect x="65" y="835" width="${width - 130}" height="116" rx="24" fill="${palette.accent}" opacity="0.18"/>
  <text x="90" y="884" font-size="26" font-weight="800" fill="${palette.ink}">Cape-Ability</text>
  <text x="90" y="922" font-size="27" fill="${palette.ink}">${esc(card.capeAbility)}</text>
  <rect x="65" y="972" width="${width - 130}" height="126" rx="24" fill="${palette.panel}"/>
  <text x="90" y="1025" font-size="26" font-weight="800" fill="${palette.ink}">Try This</text>
  ${tryLines}
  <text x="${width / 2}" y="1138" text-anchor="middle" font-size="24" font-weight="800" fill="${palette.ink}">${esc(card.identityHook)}</text>
  <text x="${width / 2}" y="1175" text-anchor="middle" font-size="18" fill="${palette.ink}">${esc(card.footer)}</text>
</svg>`;
}
