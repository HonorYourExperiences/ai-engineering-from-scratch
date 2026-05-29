import type { PropsWithChildren } from 'react';
import type { CardPalette, WonderCardRatio } from '../types';
import { getCardSize } from '../renderers/layout';

interface CardFrameProps extends PropsWithChildren {
  ratio?: WonderCardRatio;
  palette?: CardPalette;
}

export function CardFrame({ children, ratio = '2:3', palette }: CardFrameProps) {
  const size = getCardSize(ratio);
  return (
    <article
      className="card-frame"
      style={{
        aspectRatio: `${size.width} / ${size.height}`,
        background: palette?.background ?? '#fff8ea',
        color: palette?.ink ?? '#182033',
        borderColor: palette?.accent ?? '#7b61ff',
      }}
    >
      {children}
    </article>
  );
}
