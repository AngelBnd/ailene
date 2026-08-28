/**
 * A single "Pelajari" level card: an icon badge + level label, a reserved space
 * for the illustration, then a title and description. All three cards share this
 * shape; per-level content (including the `icon`) is passed in from <Pelajari>.
 *
 * Placement on the page grid is the caller's job — pass `col-span-*` via
 * `className` (4 cols on phones, 3 on desktop).
 */
function LevelCard({ level, title, description, icon, image, className = "" }) {
  return (
    <article
      className={`flex flex-col items-center rounded-md border border-grey-border bg-white px-7 py-8 text-center ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary p-2 text-white">
          {icon}
        </span>
        <span className="font-satoshi text-lg font-bold text-primary">
          {level}
        </span>
      </div>

      {/* Reserved space for the illustration — drop an <img>/SVG in via `image`. */}
      <div className=" w-full">
        {image ? (
          <img
            src={image}
            alt=""
            className="mx-auto aspect-[4/3] w-full max-w-[260px] object-contain"
          />
        ) : (
          <div className="mx-auto aspect-[4/3] w-full max-w-[240px] rounded-xl border border-dashed border-grey-border" />
        )}
      </div>

      <h3 className="font-satoshi text-2xl font-medium text-black">{title}</h3>
      <p className="mt-2 font-satoshi text-base leading-relaxed text-grey-dark font-medium">
        {description}
      </p>
    </article>
  );
}

export default LevelCard;
