interface IconBadgeProps {
  label: string;
}

export function IconBadge({ label }: IconBadgeProps) {
  return (
    <span className="icon-badge" aria-hidden="true">
      <svg viewBox="0 0 40 40" role="img" aria-label={`${label} icon`}>
        <circle cx="20" cy="20" r="18" />
        <path d="M20 8 L24 17 L34 18 L26 24 L29 34 L20 28 L11 34 L14 24 L6 18 L16 17 Z" />
      </svg>
    </span>
  );
}
