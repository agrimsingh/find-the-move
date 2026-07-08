import type { ReactNode } from "react";

export function SlidePreview({
  label,
  mobileSummary,
  children
}: {
  label: string;
  mobileSummary?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="slide-preview">
      <div className="slide-preview-label">{label}</div>
      {mobileSummary ? <div className="slide-preview-summary">{mobileSummary}</div> : null}
      <div className="slide-preview-body">{children}</div>
    </div>
  );
}
