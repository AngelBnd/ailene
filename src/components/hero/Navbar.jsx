import { useState } from "react";
import Button from "../global/Button";
import Grid from "../global/Grid";
import DesktopSearch from "./DesktopSearch";
import ExploreMenu from "./ExploreMenu";
import MobileMenu from "./MobileMenu";
import MobileSearch from "./MobileSearch";

/**
 * Top navigation.
 *   - below lg: a compact bar — hamburger (left), logo (centre), search (right).
 *     The hamburger opens <MobileMenu>; the search icon toggles an inline
 *     <SearchBar> below the bar.
 *   - lg+: the full row — logo + Eksplor + search on the left, auth on the right,
 *     laid out on the shared page <Grid>.
 */
function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-60 bg-white">
      {/* ---------- Mobile / tablet bar (below lg) ---------- */}
      <div className="lg:hidden">
        <div className="relative flex h-12 items-center justify-between border-b border-grey-border px-5 sm:h-20 md:px-8">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            className="grid size-8 -translate-x-1.5 place-items-center text-black"
          >
            <HamburgerIcon />
          </button>

          <a
            href="/"
            className="absolute left-1/2 h-4 w-[84px] -translate-x-1/2"
            aria-label="Ailene"
          >
            <img
              src="/figma/logo.svg"
              alt="Ailene"
              className="size-full object-contain"
            />
          </a>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Cari"
            aria-expanded={searchOpen}
            className="grid size-8 translate-x-1.5 place-items-center"
          >
            <img src="/figma/icon-search.svg" alt="" className="size-5" />
          </button>
        </div>
      </div>

      {/* ---------- Desktop nav (lg+) ---------- */}
      <div className="hidden lg:block">
        <Grid as="nav" className="h-17 items-center">
          <div className="col-span-8 flex min-w-0 items-center gap-8">
            <a href="/" className="block h-9 w-[90px] shrink-0">
              <img
                src="/figma/logo.svg"
                alt="Ailene"
                className="size-full object-contain object-left"
              />
            </a>

            <ExploreMenu />

            <DesktopSearch className="w-full max-w-[694px]" />
          </div>

          <div className="col-span-4 flex items-center justify-end gap-4">
            <Button variant="ghost">Masuk</Button>
            <Button className="whitespace-nowrap py-3">Mulai gratis</Button>
          </div>
        </Grid>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

export default Navbar;
