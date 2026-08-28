import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * A single course/level card for the <Levels> carousel.
 *
 * Two states:
 *   - `available` : title in full colour, a rating row, and a dark CTA button.
 *   - locked      : muted title, no rating, a disabled "Belum tersedia" button.
 *
 * When `hoverDetail` ({ meta, blurb, outcomes }) is passed, hovering the card
 * shows a details popover beside it — to the right normally, flipped to the left
 * when the card sits too close to the right edge of the viewport. The popover is
 * portalled to <body> so it escapes the carousel's `overflow-hidden`.
 */
const POPOVER_WIDTH = 300;
const POPOVER_GAP = 14;

function StarIcon({ className = "size-full" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

function LockIcon({ className = "size-full" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function ArrowIcon({ className = "size-full" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 12h14" />
      <path d="m13 8 4 4-4 4" />
    </svg>
  );
}

function CheckIcon({ className = "size-full" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

const VIEWPORT_PAD = 8;

function HoverCard({ anchor, level, title, detail }) {
  // Decide side from the anchor rect, then clamp fully inside the viewport so a
  // `position: fixed` popover near the right edge never spills and adds a
  // horizontal scrollbar.
  const vw = document.documentElement.clientWidth;
  const spaceRight = vw - anchor.right;
  const flip = spaceRight < POPOVER_WIDTH + POPOVER_GAP + 12;
  const rawLeft = flip
    ? anchor.left - POPOVER_GAP - POPOVER_WIDTH
    : anchor.right + POPOVER_GAP;
  const left = Math.min(
    Math.max(VIEWPORT_PAD, rawLeft),
    vw - POPOVER_WIDTH - VIEWPORT_PAD,
  );
  const top = Math.max(12, Math.min(anchor.top, window.innerHeight - 12 - 460));

  return createPortal(
    <div
      className="pointer-events-none  fixed z-60 font-satoshi font-medium"
      style={{ top, left, width: POPOVER_WIDTH }}
    >
      <div className="relative rounded-xl border  border-grey-border bg-white shadow-[0_10px_44px_rgba(72,83,99,0.2)]">
        <span
          aria-hidden="true"
          className={`absolute top-1/2 z-10 size-3 -translate-y-1/2 rotate-45 border-grey-border bg-white ${
            flip
              ? "-right-1.5 border-r border-t"
              : "-left-1.5 border-b border-l"
          }`}
        />

        <div className="max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-xl p-5">
          <p className="text-xs font-medium text-grey-mid">{level}</p>
          <h4 className="mt-0.5 text-lg font-bold text-black">{title}</h4>
          <p className="mt-1 text-xs text-grey-mid">{detail.meta}</p>

          <p className="mt-3 text-sm leading-relaxed text-grey-dark">
            {detail.blurb}
          </p>

          <ul className="mt-3 flex flex-col gap-2">
            {detail.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-2 text-sm leading-snug text-grey-dark"
              >
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-grey-dark" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CourseCard({
  level,
  title,
  description,
  available = false,
  badge = "X",
  rating,
  reviews,
  className = "",
  hoverDetail,
}) {
  const articleRef = useRef(null);
  const [anchor, setAnchor] = useState(null);

  const openPopover = () => {
    if (!hoverDetail || !articleRef.current) return;
    setAnchor(articleRef.current.getBoundingClientRect());
  };
  const closePopover = () => setAnchor(null);

  // Keep the popover glued to the card while it's shown; drop it on scroll.
  useEffect(() => {
    if (!anchor) return;
    const reposition = () => {
      if (articleRef.current)
        setAnchor(articleRef.current.getBoundingClientRect());
    };
    window.addEventListener("resize", reposition);
    window.addEventListener("scroll", closePopover, true);
    return () => {
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", closePopover, true);
    };
  }, [anchor]);

  return (
    <article
      ref={articleRef}
      onMouseEnter={openPopover}
      onMouseLeave={closePopover}
      className={`flex flex-col overflow-hidden rounded-md border border-grey-border bg-white px-3.5 py-4 transition-colors hover:bg-gray-100 ${className}`}
    >
      {/* Image area — placeholder */}
      <div className="relative w-full mb-3 flex justify-between items-center gap-2">
        <span className="font-satoshi text-sm font-bold text-grey-dark self-center">
          {level}
        </span>

        <span
          className={`${badge === "X" ? "invisible " : ""}rounded-md border-2 border-primary/30 bg-primary/10 px-2.5 py-1 font-satoshi text-sm font-bold text-primary`}
        >
          {badge}
        </span>
      </div>
      <div className="h-[8.3rem] w-full bg-grey-border  border border-grey-border rounded-sm mb-4"></div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1 ">
        <h3
          className={`font-satoshi text-lg font-bold ${
            available ? "text-grey-dark" : "text-grey-mid"
          }`}
        >
          {title}
        </h3>
        <p className="font-satoshi text-sm mb-3 font-medium leading-relaxed text-grey-mid">
          {description}
        </p>

        {available && rating && (
          <div className="mt-1 flex items-center gap-1">
            <span className="flex items-center gap-1 rounded-sm  border border-grey-border border-2 px-2 py-1">
              <StarIcon className="size-3.5 text-[#D6A693]" />
              <span className="font-satoshi  text-xs font-bold text-grey-mid ">
                {rating}
              </span>
            </span>
            {reviews && (
              <span className="font-satoshi  rounded-sm   border border-grey-border border-2   px-2 py-1 font-medium text-xs text-grey-mid">
                {reviews}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-3">
          {available ? (
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 font-satoshi text-sm font-bold text-white transition-colors hover:bg-black/90"
            >
              Mulai level ini
              <ArrowIcon className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="flex w-full items-center justify-center gap-2 rounded-md bg-grey-light px-4 py-2.5 font-satoshi text-sm font-bold text-grey-mid"
            >
              <LockIcon className="size-4" />
              Belum tersedia
            </button>
          )}
        </div>
      </div>

      {anchor && hoverDetail && (
        <HoverCard
          anchor={anchor}
          level={level}
          title={title}
          detail={hoverDetail}
        />
      )}
    </article>
  );
}

export default CourseCard;
