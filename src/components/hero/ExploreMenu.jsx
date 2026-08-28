import { useEffect, useState } from "react";
import { MENU_COURSES } from "./navMenuData";

/**
 * "Eksplor" navbar item (lg+). Hovering it opens a "Jalur Belajar" panel;
 * hovering a course in that panel reveals its lessons in a second column.
 * Closes on mouse-leave, blur-out, or Escape.
 */
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
      className="size-4 shrink-0"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ExploreMenu() {
  const [open, setOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);

  const close = () => {
    setOpen(false);
    setActiveCourse(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <a
        href="/eksplor"
        aria-expanded={open}
        className="block shrink-0 rounded-md px-4 py-2 text-base font-medium tracking-[0.1px] text-grey-dark transition hover:bg-gray-100 hover:text-primary"
      >
        Eksplor
      </a>

      {open && (
        // Transparent top padding bridges the gap to the link so the pointer
        // never leaves the hover region on the way down.
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="flex rounded-xl border border-grey-border bg-white p-2 shadow-[0_12px_44px_rgba(72,83,99,0.18)]">
            {/* Column 1 — courses */}
            <div className="w-56 shrink-0">
              <p className="px-3 py-2 font-satoshi text-sm font-bold text-grey-dark">
                Jalur Belajar
              </p>
              <ul className="flex flex-col">
                {MENU_COURSES.map((course) => (
                  <li key={course.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCourse(course)}
                      onFocus={() => setActiveCourse(course)}
                      className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left font-satoshi text-sm transition hover:bg-gray-100 ${
                        activeCourse?.title === course.title
                          ? "bg-gray-100 text-primary"
                          : "text-grey-dark"
                      }`}
                    >
                      {course.title}
                      <ChevronRightIcon />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — lessons of the hovered course */}
            {activeCourse && (
              <div className="w-72 shrink-0 border-l border-grey-border pl-2">
                <ul className="flex flex-col">
                  {activeCourse.modules.map((mod) => (
                    <li key={mod}>
                      <a
                        href="#"
                        className="block rounded-md px-3 py-2.5 font-satoshi text-sm text-grey-dark transition hover:bg-gray-100"
                      >
                        {mod}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreMenu;
