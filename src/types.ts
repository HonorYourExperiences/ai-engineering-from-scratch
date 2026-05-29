export type WonderCardEdition = 'career' | 'creature' | 'influence' | 'invention' | 'identity';
export type WonderCardRatio = '2:3' | '3:5';

export interface CardPalette {
  background?: string;
  accent?: string;
  panel?: string;
  ink?: string;
}

export interface HeroImageData {
  src: string;
  alt: string;
}

export interface QuickFactData {
  label: string;
  value: string;
}

export interface WonderCardData {
  id: string;
  edition: WonderCardEdition;
  title: string;
  subtitle: string;
  ratio: WonderCardRatio;
  heroImage: HeroImageData;
  palette?: CardPalette;
  quickFacts: QuickFactData[];
  capeAbility: string;
  tryThis: string;
  identityHook: string;
  footer: string;
}

export interface CardSize {
  width: number;
  height: number;
}
