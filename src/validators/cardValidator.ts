import type { WonderCardData, WonderCardEdition, WonderCardRatio } from '../types';

export interface ValidationIssue {
  file: string;
  level: 'error' | 'warning';
  message: string;
}

const editions: WonderCardEdition[] = ['career', 'creature', 'influence', 'invention', 'identity'];
const ratios: WonderCardRatio[] = ['2:3', '3:5'];

const textLimits: Array<[keyof WonderCardData, number]> = [
  ['title', 34],
  ['subtitle', 90],
  ['capeAbility', 96],
  ['tryThis', 130],
  ['identityHook', 90],
  ['footer', 90],
];

function hasString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validateWonderCard(card: Partial<WonderCardData>, file: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const field of ['id', 'edition', 'title', 'subtitle', 'ratio', 'capeAbility', 'tryThis', 'identityHook', 'footer'] as const) {
    if (!hasString(card[field])) {
      issues.push({ file, level: 'error', message: `Missing required field: ${field}` });
    }
  }
  if (card.edition && !editions.includes(card.edition)) {
    issues.push({ file, level: 'error', message: `Invalid edition: ${String(card.edition)}` });
  }
  if (card.ratio && !ratios.includes(card.ratio)) {
    issues.push({ file, level: 'error', message: `Invalid ratio: ${String(card.ratio)}` });
  }
  if (!card.heroImage || !hasString(card.heroImage.src) || !hasString(card.heroImage.alt)) {
    issues.push({ file, level: 'error', message: 'Missing heroImage.src or heroImage.alt' });
  }
  if (!Array.isArray(card.quickFacts) || card.quickFacts.length === 0) {
    issues.push({ file, level: 'error', message: 'Add at least one quick fact' });
  } else {
    card.quickFacts.forEach((fact, index) => {
      if (!hasString(fact.label) || !hasString(fact.value)) {
        issues.push({ file, level: 'error', message: `Quick fact ${index + 1} needs label and value` });
      }
      if ((fact.label?.length ?? 0) > 24 || (fact.value?.length ?? 0) > 42) {
        issues.push({ file, level: 'warning', message: `Quick fact ${index + 1} may overflow its panel` });
      }
    });
  }
  for (const [field, limit] of textLimits) {
    const value = card[field];
    if (typeof value === 'string' && value.length > limit) {
      issues.push({ file, level: 'warning', message: `${field} is ${value.length} characters; risk of text overflow above ${limit}` });
    }
  }
  return issues;
}
