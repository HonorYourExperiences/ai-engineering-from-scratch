import type { PropsWithChildren } from 'react';

interface InfoPanelProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export function InfoPanel({ title, className = '', children }: InfoPanelProps) {
  return (
    <section className={`info-panel ${className}`.trim()}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}
