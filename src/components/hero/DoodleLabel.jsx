/**
 * Hand-written teal caption + curved arrow doodle that points at a hero card.
 * `arrow` is the SVG asset path; `flip` mirrors it horizontally.
 * `under` puts the caption below the arrow instead of above it.
 */
function DoodleLabel({
  children,
  arrow,
  flip = false,
  under = false,
  className = "",
}) {
  // Caption size follows the wrapper's font-size (`text-*` on `className`), so
  // callers can scale it. Wrappers that want the old fixed size pass `text-xl`.
  const caption = (
    <p className="font-satoshi text-[1em] font-bold leading-tight">{children}</p>
  );
  const doodle = (
    <img
      src={arrow}
      alt=""
      aria-hidden="true"
      className={`w-full ${under ? "mb-1" : "mt-1"} ${flip ? "-scale-x-100" : ""}`}
    />
  );

  return (
    <div className={`text-primary ${className}`}>
      {under ? (
        <>
          {doodle}
          {caption}
        </>
      ) : (
        <>
          {caption}
          {doodle}
        </>
      )}
    </div>
  );
}

export default DoodleLabel;
