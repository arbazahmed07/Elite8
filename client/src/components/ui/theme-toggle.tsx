
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="rounded-full p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        {theme === "light" ? (
          <Sun size={18} className="text-primary" />
        ) : (
          <Moon size={18} className="text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}
