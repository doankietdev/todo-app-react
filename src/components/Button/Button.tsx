import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props {
  variant?: "primary" | "secondary" | "success" | "danger" | "warn";
  type?: "contained" | "outlined";
  size?: "sm" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  variant = "primary",
  type = "contained",
  size = "lg",
  disabled = false,
  onClick = () => {},
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      {type === "contained" && (
        <button
          type="button"
          disabled={disabled}
          onClick={() => onClick()}
          className={cn(
            "focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5",
            {
              "bg-primary hover:bg-primary-light": variant === "primary",
              "": variant === "secondary",
              "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
                variant === "success",
              "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":
                variant === "danger",
              "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900":
                variant === "warn",
              "opacity-50 cursor-not-allowed hover:bg-primary": disabled,
            }
          )}
        >
          {children}
        </button>
      )}

      {type === "outlined" && (
        <button
          type="button"
          onClick={() => onClick()}
          disabled={disabled}
          className={cn(
            "hover:text-white border font-medium rounded-lg text-center",
            {
              "text-sm px-5 py-2.5": size === "lg",
              "text-sm px-2 py-1": size === "sm",
              "text-blue-700 border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800":
                variant === "primary",
              "text-red-700 border-red-700 hover:bg-red-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800":
                variant === "danger",
              "opacity-50 cursor-not-allowed hover:hover:bg-blue-800": disabled,
            }
          )}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
