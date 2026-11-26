/** Minimal index-style label: 001 / About */
export function SectionLabel({ index, label, id }: { index: string; label: string; id?: string }) {
  return (
    <p id={id} className="label flex items-center gap-4 text-muted">
      <span className="text-accent-text">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      <span>{label}</span>
    </p>
  );
}
