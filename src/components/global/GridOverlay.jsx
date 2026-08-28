import Grid from "./Grid";

/**
 * Dev-only visual guide for the shared responsive page grid (4 / 6 / 12 columns).
 * Toggle with the "g" key. Renders the same <Grid> that page content uses;
 * the extra column cells are hidden until their breakpoint so the count matches.
 */
function GridOverlay({ visible }) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <Grid className="h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full bg-red-500/10 outline outline-red-500/20 ${
              i >= 6 ? "hidden lg:block" : i >= 4 ? "hidden md:block" : ""
            }`}
          />
        ))}
      </Grid>
    </div>
  );
}

export default GridOverlay;
