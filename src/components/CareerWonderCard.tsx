import type { WonderCardData } from '../types';
import { CapeAbility } from './CapeAbility';
import { CardFrame } from './CardFrame';
import { FooterBrand } from './FooterBrand';
import { HeroImage } from './HeroImage';
import { IdentityHook } from './IdentityHook';
import { InfoPanel } from './InfoPanel';
import { QuickFacts } from './QuickFacts';
import { TryThis } from './TryThis';

interface CareerWonderCardProps {
  card: WonderCardData;
}

export function CareerWonderCard({ card }: CareerWonderCardProps) {
  return (
    <CardFrame ratio={card.ratio} palette={card.palette}>
      <header className="card-title-panel">
        <p className="edition-label">WonderCards {card.edition} edition</p>
        <h1>{card.title}</h1>
        <p>{card.subtitle}</p>
      </header>
      <HeroImage image={card.heroImage} />
      <InfoPanel title="Quick Facts">
        <QuickFacts facts={card.quickFacts} />
      </InfoPanel>
      <InfoPanel title="Cape-Ability" className="accent-panel">
        <CapeAbility text={card.capeAbility} />
      </InfoPanel>
      <InfoPanel title="Try This">
        <TryThis text={card.tryThis} />
      </InfoPanel>
      <IdentityHook text={card.identityHook} />
      <FooterBrand text={card.footer} />
    </CardFrame>
  );
}
