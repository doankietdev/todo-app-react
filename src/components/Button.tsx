import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props {
  variant?: "primary" | "secondary" | "success" | "danger" | "warn";
}

function Button({ variant = "primary", children }: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      className={cn(
        "focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        {
          "bg-primary hover:bg-primary-light":
            variant === "primary",
          "": variant === "secondary",
          "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
            variant === "success",
          "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":
            variant === "danger",
          "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900":
            variant === "warn",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
