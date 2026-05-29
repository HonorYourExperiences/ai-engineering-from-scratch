import type { CardSize, WonderCardRatio } from '../types';

export const CARD_SIZES: Record<WonderCardRatio, CardSize> = {
  '2:3': { width: 800, height: 1200 },
  '3:5': { width: 900, height: 1500 },
};

export function getCardSize(ratio: WonderCardRatio = '2:3'): CardSize {
  return CARD_SIZES[ratio];
}
