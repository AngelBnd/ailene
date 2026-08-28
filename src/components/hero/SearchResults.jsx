import { searchCourses } from "./navMenuData";

/**
 * Keyword search result rows, shared by <MobileSearch> (full-screen) and
 * <DesktopSearch> (navbar dropdown). Renders nothing until `query` is non-empty,
 * then the matching courses or a "no results" line.
 */
function SearchResults({ query, onSelect }) {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const results = searchCourses(query);

  if (results.length === 0) {
    return (
      <p className="px-2 py-8 text-center font-satoshi text-sm text-grey-mid">
        Tidak ada hasil untuk &ldquo;{trimmed}&rdquo;.
      </p>
    );
  }

  return (
    <ul className="flex flex-col divide-y divide-grey-border ">
      {results.map((course) => (
        <li key={course.title}>
          <a
            href="#"
            onClick={onSelect}
            className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-grey-light"
          >
            <span className="size-9 shrink-0 rounded-md bg-grey-border" />
            <span className="flex min-w-0 flex-col">
              <span className="font-satoshi text-base font-bold text-grey-dark">
                {course.title}
              </span>
              <span className="font-satoshi text-sm font-medium text-grey-mid">
                <span className="font-bold text-grey-mid">
                  {" "}
                  {course.level}{" "}
                </span>{" "}
                · {course.duration} · {course.moduleCount} Modul
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
