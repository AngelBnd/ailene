import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * Full-screen search for small screens, opened by the navbar's search icon.
 * Type a keyword (see `keywords` in navMenuData) and the matching learning
 * tracks appear as result rows. `open` / `onClose` are owned by <Navbar>; the
 * query resets whenever it closes.
 */
function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function MobileSearch({ open, onClose }) {
  const [query, setQuery] = useState("");

  // Lock body scroll while open; Escape closes.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cari"
      className="fixed inset-0 z-100 flex flex-col bg-white lg:hidden"
    >
      {/* ---------- search bar ---------- */}
      <div className="flex shrink-0 items-center gap-3 border-b border-grey-border px-5 py-2.5">
        <SearchBar
          className="flex-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup pencarian"
          className="grid size-8 shrink-0 translate-x-1.5 place-items-center text-black"
        >
          <CloseIcon />
        </button>
      </div>

      {/* ---------- results ---------- */}
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-2">
        <SearchResults query={query} />
      </div>
    </div>
  );
}

export default MobileSearch;
