import { useEffect, useState } from "react";
import { MENU_COURSES } from "./navMenuData";
import Button from "../global/Button";

/**
 * Full-screen navigation drawer for small screens. Two views:
 *   - list    : auth links, the "Jalur Belajar" course list, "Lainnya" links
 *   - detail  : the modules of the course tapped in the list
 * `open` / `onClose` are owned by <Navbar>. The drill-down (`activeCourse`)
 * resets whenever the drawer closes.
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

function ChevronLeftIcon() {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 shrink-0 text-grey-mid"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MobileMenu({ open, onClose }) {
  const [activeCourse, setActiveCourse] = useState(null);

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

  // Always start on the list view the next time it opens.
  useEffect(() => {
    if (!open) setActiveCourse(null);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-100 flex flex-col bg-white lg:hidden"
    >
      {/* ---------- top bar ---------- */}
      <div className="relative flex h-12 shrink-0 items-center justify-between border-b border-grey-border px-5 sm:h-14">
        {activeCourse ? (
          <button
            type="button"
            onClick={() => setActiveCourse(null)}
            aria-label="Kembali"
            className="grid size-8 -translate-x-1.5 place-items-center text-black"
          >
            <ChevronLeftIcon />
          </button>
        ) : (
          <span className="size-8" />
        )}

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
          onClick={onClose}
          aria-label="Tutup menu"
          className="grid size-8 translate-x-1.5 place-items-center text-black"
        >
          <CloseIcon />
        </button>
      </div>

      {/* ---------- body ---------- */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-3">
        {activeCourse ? (
          <div>
            <h2 className="font-satoshi text-lg font-bold text-black">
              {activeCourse.title}
            </h2>
            <ul className="mt-1 flex flex-col divide-y divide-grey-border">
              {activeCourse.modules.map((mod) => (
                <li key={mod}>
                  <a
                    href="#"
                    className="block py-3.5 font-satoshi text-[15px] text-grey-dark"
                  >
                    {mod}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <nav className="flex flex-col">
            <a
              href="/masuk"
              className="py-2.5 font-satoshi text-base font-medium text-primary"
            >
              Masuk
            </a>
            <a
              href="/mulai"
              className="py-2.5 font-satoshi text-base font-medium text-primary"
            >
              Belum punya akun?
            </a>

            <hr className="my-4 border-grey-border" />

            <p className="font-satoshi text-base font-bold text-primary">
              Jalur Belajar
            </p>
            <ul className="mt-1 flex flex-col divide-y divide-grey-border">
              {MENU_COURSES.map((course) => (
                <li key={course.title}>
                  <button
                    type="button"
                    onClick={() => setActiveCourse(course)}
                    className="flex font-medium w-full items-center justify-between gap-4 py-4 text-left font-satoshi  text-grey-dark"
                  >
                    {course.title}
                    <ChevronRightIcon />
                  </button>
                </li>
              ))}
            </ul>

            <hr className="my-4 border-grey-border" />

            <p className="font-satoshi text-base font-bold text-primary">
              Lainnya dari Ailene
            </p>
            <a
              href="/perusahaan"
              className="mt-1 block py-3.5 font-satoshi font-medium text-base text-grey-dark"
            >
              Program untuk Perusahaan
            </a>
          </nav>
        )}
      </div>

      {!activeCourse && (
        <div className="shrink-0 border-t border-grey-border px-6 py-4">
          <Button className="w-full">Mulai belajar gratis</Button>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
