/**
 * Left "box" of the hero cluster — a prompting drill. Rebuilt in JSX (no screenshot).
 * Internal sizing is in `em`, scaled from the root `font-size` set by the caller.
 */
function PromptingExerciseCard({ className = "", style }) {
  return (
    <div
      className={`rounded-[1em] bg-white p-[1.6em] shadow-[0_5px_34px_rgba(72,83,99,0.2)] ${className}`}
      style={style}
    >
      <p className="text-[0.68em] font-bold tracking-[0.09em] text-primary">
        Latihan prompting
      </p>
      <h3 className="mt-[0.2em] text-[1.15em] font-bold text-grey-dark">
        Ubah biar hasilnya spesifik:
      </h3>

      <p className="mt-[0.9em] rounded-[0.5em] bg-grey-light/70 px-[0.9em] py-[0.6em] text-[0.9em] text-grey-mid line-through">
        Buatin email dong
      </p>

      <p className="mt-[0.3em] rounded-[0.6em] border border-primary/40 bg-primary/5 px-[0.9em] py-[0.8em] text-[0.92em] leading-relaxed text-grey-dark">
        &ldquo;Tulis email follow-up invoice #123 ke klien, nada sopan, 3
        kalimat.&rdquo;
      </p>
    </div>
  );
}

export default PromptingExerciseCard;
