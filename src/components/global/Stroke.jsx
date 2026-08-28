/**
 * Decorative hand-drawn strokes that sit relative to a word in running text.
 * Wrap the word:
 *
 *   <Underline src={someStroke}>mengubah</Underline>
 *   <Highlight src={someStroke}>penting</Highlight>
 *
 * Both render the stroke *behind* the word — the text stays on top via a local
 * stacking context (`isolate` + `z-10` on the text, `-z-10` on the stroke).
 * `Underline` anchors it to the word's baseline; `Highlight` centres it.
 *
 * Shared props:
 *   src        – imported SVG/PNG asset URL for the stroke
 *   x, y       – CSS length offsets to nudge the stroke (any unit, e.g. "2px",
 *                "-0.1em", "3%"). Positive y moves it down.
 *   width      – CSS width of the stroke relative to the word (default "100%").
 *                Use e.g. "120%" to overshoot; pair with a negative `x` to
 *                re-centre.
 *   className  – extra classes merged onto the <img> (z-index, opacity, …)
 */

function Underline({
  src,
  children,
  x = "0px",
  y = "-0.1em",
  width = "100%",
  className = "",
}) {
  return (
    <span className="relative isolate inline-block">
      <span className="relative z-10">{children}</span>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ width, transform: `translate(${x}, ${y})` }}
        className={`pointer-events-none absolute left-0 top-full -z-10 max-w-none select-none ${className}`}
      />
    </span>
  );
}

function Highlight({
  src,
  children,
  x = "0px",
  y = "0px",
  width = "100%",
  className = "",
}) {
  return (
    <span className="relative isolate inline-block ">
      <span className="relative z-10">{children}</span>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ width, transform: `translate(${x}, calc(-50% + ${y}))` }}
        className={`pointer-events-none absolute left-0 top-1/2 -z-10 max-w-none select-none ${className}`}
      />
    </span>
  );
}

export { Underline, Highlight };
