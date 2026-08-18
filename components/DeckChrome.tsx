import { slideCount } from "../lib/slides";

export function DeckChrome({ index }: { index: number }) {
  const label = `${String(index + 1).padStart(2, "0")}/${String(slideCount).padStart(2, "0")}`;

  return (
    <div className="chrome">
      <div className="chrome-row">
        <span className="chrome-mark">Find the move</span>
        <span className="chrome-count">
          {label}
          <span hidden>
            {1}
            {slideCount}
          </span>
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${((index + 1) / slideCount) * 100}%` }}
        />
      </div>
    </div>
  );
}
