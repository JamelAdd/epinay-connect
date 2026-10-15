import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "accent" | "destructive";
type ButtonSize = "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark disabled:bg-border disabled:text-ink-muted",
  secondary: "bg-transparent text-primary border border-primary hover:bg-surface-secondary disabled:border-border disabled:text-ink-muted",
  tertiary: "bg-transparent text-primary hover:bg-surface-secondary disabled:text-ink-muted",
  // Le texte reste foncé sur fond safran : le safran est trop clair pour du texte blanc (règle du design system).
  accent: "bg-accent text-ink hover:bg-accent-light disabled:bg-border disabled:text-ink-muted",
  destructive: "bg-danger text-white hover:opacity-90 disabled:bg-border disabled:text-ink-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-12 px-5 text-[16px]",
  sm: "h-10 px-4 text-[14px]",
};

/**
 * Bouton du design system Orgemont Connect.
 * Règle : au maximum UN bouton "accent" (safran) par écran — le reste des
 * actions principales doit utiliser "primary" (terracotta).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
