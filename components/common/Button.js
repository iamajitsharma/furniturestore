import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "helper/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex min-w-fit items-center justify-center rounded-full text-sm font-semibold uppercase transition-colors focus:outline-none focus:ring-0 disabled:opacity-50  disabled:pointer-events-none data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-white hover:text-primary",
        secondary: "bg-white text-primary hover:bg-primary hover:text-white",
        ghost: "bg-secondary text-white hover:bg-[#f5f5f5] hover:bg-secondary",
        outline:
          "bg-transperant text-primary border-2 border-gray-100 hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out",
      },
      size: {
        default: "px-4 py-2 md:px-4 md:py-2",
        sm: "px-2 py-2 md:px-0 md:py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, target, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          target={target}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
