import { cn } from "../../utils/helpers";

const VARIANTS = {
  primary: `
    relative px-7 py-3.5 rounded-xl font-medium text-sm tracking-wide
    bg-accent text-bg overflow-hidden
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]
    hover:scale-105 active:scale-95
  `,
  outline: `
    relative px-7 py-3.5 rounded-xl font-medium text-sm tracking-wide
    glass border border-white/10 text-text-primary
    transition-all duration-300
    hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]
    hover:scale-105 active:scale-95
  `,
  ghost: `
    px-4 py-2 rounded-lg font-medium text-sm
    text-muted transition-all duration-200
    hover:text-accent hover:bg-accent/5
  `,
};

export default function Button({ children, variant = "primary", className = "", href, target, onClick, type = "button", ...props }) {
  const classes = cn(VARIANTS[variant], className);

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
