import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * Navbar search for lg+ : the same keyword search as <MobileSearch>, shown as a
 * dropdown anchored under the input instead of a full-screen overlay. Closes on
 * click-outside, Escape, or picking a result.
 */
function DesktopSearch({ className = "" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const showResults = open && query.trim().length > 0;

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`}
      onFocusCapture={() => setOpen(true)}
    >
      <SearchBar
        className="w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {showResults && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-lg border border-grey-border bg-white p-2 shadow-[0_12px_44px_rgba(72,83,99,0.18)]">
          <SearchResults query={query} onSelect={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default DesktopSearch;
