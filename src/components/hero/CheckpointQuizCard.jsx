/**
 * Right "box" of the hero cluster — a checkpoint quiz. Rebuilt in JSX (no screenshot).
 * Internal sizing is in `em`, scaled from the root `font-size` set by the caller.
 */
function Option({ children, selected = false }) {
  return (
    <li
      className={`flex items-center gap-[0.7em] rounded-[0.7em] border px-[0.9em] py-[0.7em] ${
        selected
          ? "border-primary bg-primary/8 text-grey-dark"
          : "border-grey-border text-grey-dark"
      }`}
    >
      {selected ? (
        <span className="grid size-[1.3em] shrink-0 place-items-center rounded-full bg-primary text-white">
          <svg
            viewBox="0 0 24 24"
            className="size-[0.85em]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span className="size-[1.3em] shrink-0 rounded-full border border-grey-mid/60" />
      )}
      <span>{children}</span>
    </li>
  );
}

function CheckpointQuizCard({ className = "", style }) {
  return (
    <div
      className={`rounded-[1em] bg-white p-[1.2em] shadow-[0_4px_25px_rgba(72,83,99,0.2)] ${className}`}
      style={style}
    >
      <p className="text-[0.66em] font-bold tracking-[0.06em] text-grey-mid">
        Modul 1 · Checkpoint
      </p>
      <h3 className="mt-[0.2em] text-[1em] font-bold leading-snug text-grey-dark">
        Bagaimana cara LLM menjawab pertanyaanmu?
      </h3>

      <ul className="mt-[0.3em] flex flex-col gap-[0.6em] text-[0.9em]">
        <Option>Mengingat jawaban dari database</Option>
        <Option selected>Memprediksi kata berikutnya dari pola</Option>
      </ul>
    </div>
  );
}

export default CheckpointQuizCard;
