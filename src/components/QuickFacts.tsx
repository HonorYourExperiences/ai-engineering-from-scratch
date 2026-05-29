import type { QuickFactData } from '../types';
import { IconBadge } from './IconBadge';

interface QuickFactsProps {
  facts: QuickFactData[];
}

export function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="quick-facts">
      {facts.map((fact) => (
        <div className="quick-fact" key={fact.label}>
          <IconBadge label={fact.label} />
          <div>
            <strong>{fact.label}</strong>
            <span>{fact.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
