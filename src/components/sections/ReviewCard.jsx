/**
 * A single testimonial card for the <Reviews> section: a large quote mark, the
 * quote body, then an avatar + name + role footer. Grid placement is the
 * caller's job — pass `col-span-*` via `className`.
 *
 * The avatar is left as a plain `bg-grey-border` placeholder.
 */
function ReviewCard({ quote, name, role, className = "" }) {
  return (
    <article
      className={`flex flex-col rounded-xl border border-grey-border bg-white p-6 ${className}`}
    >
      <span
        aria-hidden="true"
        className="font-satoshi text-7xl font-bold leading-[0.8] text-primary"
      >
        &ldquo;
      </span>

      <p className="flex-1 -mt-3  font-satoshi text-sm font-medium leading-relaxed text-grey-dark">
        {quote}
      </p>

      <div className="mt-4 flex items-center gap-3  pt-4">
        <span className="size-10 shrink-0 rounded-full bg-grey-border" />
        <span className="flex flex-col">
          <span className="font-satoshi text-sm font-bold text-grey-dark">
            {name}
          </span>
          <span className="font-satoshi text-xs font-medium text-grey-mid">
            {role}
          </span>
        </span>
      </div>
    </article>
  );
}

export default ReviewCard;
