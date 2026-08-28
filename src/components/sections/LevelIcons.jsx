/**
 * Inline level icons for the "Pelajari" cards. They inherit `currentColor`, so
 * colour them from the parent (e.g. `text-white` inside the badge). Sized via a
 * wrapping element — each SVG fills its box (`size-full`).
 */

/** Pemula — single sparkle. */
export function SparkleIcon({ className = "size-full" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2c.55 4.03 1.45 6.78 2.83 8.17C16.22 11.55 18.97 12.45 23 13c-4.03.55-6.78 1.45-8.17 2.83C13.45 17.22 12.55 19.97 12 24c-.55-4.03-1.45-6.78-2.83-8.17C7.78 14.45 5.03 13.55 1 13c4.03-.55 6.78-1.45 8.17-2.83C10.55 8.78 11.45 6.03 12 2Z" />
    </svg>
  );
}

/** Menengah — repeat / automation loop. */
export function RepeatIcon({ className = "size-full" }) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

/** Mahir — CPU / chip. */
export function CpuIcon({ className = "size-full" }) {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2" />
    </svg>
  );
}
