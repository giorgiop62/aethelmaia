import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:border-accent hover:text-accent rounded-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-none",
        ghost: 
          "text-foreground hover:text-accent rounded-none",
        link: 
          "text-foreground underline-offset-4 hover:underline hover:text-accent",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold",
        accentOutline:
          "border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none font-medium",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-6 text-xs",
        lg: "h-12 px-10 text-base",
        xl: "h-14 px-12 text-base tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
