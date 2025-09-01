import React from "react";
import { useTheme } from "../theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (

    <button
      onClick={toggle}
      className="px-1 mx-8 py-1 rounded-full   border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm shadow hover:shadow-md transition"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
