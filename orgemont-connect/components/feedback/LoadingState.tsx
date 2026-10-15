export interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Chargement…" }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center" role="status">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary"
        aria-hidden="true"
      />
      <p className="text-[14px] text-ink-secondary">{label}</p>
    </div>
  );
}
