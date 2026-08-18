import { chromeLabel, spokenCount, spokenProgress } from "../lib/slides";

export function DeckChrome({ index }: { index: number }) {
  const label = chromeLabel(index);

  return (
    <div className="chrome">
      <div className="chrome-row">
        <span className="chrome-mark">Find the move</span>
        <span className="chrome-count">
          {label}
          <span hidden>
            {1}
            {spokenCount}
          </span>
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${spokenProgress(index)}%` }}
        />
      </div>
    </div>
  );
}
