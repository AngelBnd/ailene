/**
 * The shared page grid. Column count and side margin are responsive:
 *   - phones / small screens : 4 columns, 20px (1.25rem) margin
 *   - tablets (md)           : 6 columns, 32px (2rem) margin
 *   - desktop (lg+)          : 12 columns, margin switched on aspect ratio —
 *                              160px on 16:9 / wider, 76px on 16:10 & squarer
 *                              (see --spacing-page-margin in index.css)
 *
 * <GridOverlay /> renders this exact grid, so any content placed inside a <Grid>
 * lines up with the overlay. Position children with `col-span-*` / `col-start-*`
 * (use `col-span-full` for a full-width row — it works at every column count).
 */
function Grid({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`grid grid-cols-4 gap-gutter px-5 md:grid-cols-6 md:px-8 lg:grid-cols-12 lg:px-page-margin ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Grid;
