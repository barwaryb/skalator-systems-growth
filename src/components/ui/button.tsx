import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-secondary hover:text-secondary-foreground rounded-lg",
        link: "text-foreground underline-offset-4 hover:underline",
        // Modern gradient accent button
        accent: "relative bg-accent text-accent-foreground font-semibold rounded-full overflow-hidden hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-500",
        // Soft accent
        "accent-soft": "bg-accent/10 text-accent font-semibold rounded-full hover:bg-accent hover:text-accent-foreground",
        // Outline with accent hover
        "outline-accent": "border-2 border-foreground/20 bg-transparent text-foreground rounded-full hover:border-accent hover:text-accent",
        // Dark solid
        dark: "bg-foreground text-background rounded-full hover:bg-foreground/90",
        // Text only with arrow animation
        text: "text-foreground font-medium hover:text-accent p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-sm",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
