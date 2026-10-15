import { type TextareaHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "@/lib/utils/cn";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, id, className, rows = 4, ...props }, ref) => {
    const generatedId = useId();
    const areaId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={areaId} className="text-[13px] font-medium text-ink-secondary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={areaId}
          rows={rows}
          className={cn(
            "rounded-md border border-transparent bg-surface-secondary px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted",
            "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
            error && "border-danger focus:border-danger focus:ring-danger/20",
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${areaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${areaId}-error`} className="text-[13px] text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
