/**
 * Shared button used across the navbar and hero.
 * variant: "primary" (filled teal) | "ghost" (transparent, teal label)
 *          | "white" (filled white, teal label — for use on teal backgrounds)
 * Pass `icon` for a trailing (or leading) glyph node.
 */
const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
  ghost: "bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
  white: "bg-white text-primary hover:bg-white/90 active:bg-white/80",
};

function Button({
  variant = "primary",
  icon = null,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex min-w-12 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2.5 text-base font-medium leading-5 tracking-[0.1px] transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}

export default Button;
