/**
 * Navbar search field. Presentational: pass `value` + `onChange` to control it
 * (as <MobileSearch> does) or leave them off for an uncontrolled placeholder
 * (as the desktop navbar does). `onSubmit` fires after the default is prevented.
 */
function SearchBar({
  className = "",
  value,
  onChange,
  autoFocus = false,
  placeholder = "Mau belajar apa tentang AI?",
  onSubmit,
}) {
  return (
    <form
      className={`flex items-center gap-2.5 rounded-lg border border-grey-border bg-white px-4 py-3 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      role="search"
    >
      <span className="block size-6 shrink-0">
        <img src="/figma/icon-search.svg" alt="" className="size-full" />
      </span>
      <input
        type="search"
        aria-label="Cari materi"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        className="min-w-0 flex-1 bg-transparent text-base text-grey-dark placeholder:text-grey-mid focus:outline-none"
      />
    </form>
  );
}

export default SearchBar;
