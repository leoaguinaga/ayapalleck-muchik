import React from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium, SunMoon } from "lucide-react";

export default function ThemeSelector() {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center gap-1.5 text-gray-600/90 pr-1.5">
        <SunMedium className="rounded-md size-7 p-1 border hover:text-black transition-all duration-300 hover:p-0.5" />
        <Moon className="rounded-md size-7 p-1 border hover:text-black transition-all duration-300 hover:p-0.5" />
        <SunMoon className="rounded-md size-7 p-1 border hover:text-black transition-all duration-300 hover:p-0.5" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-gray-600/90 dark:text-gray-400 pr-1.5">
      <SunMedium 
        className={`rounded-md size-7 p-1 border transition-all duration-300 cursor-pointer ${
          theme === "light" 
            ? "text-white bg-black/85 hover:p-0.5" 
            : "hover:text-black hover:p-0.5 dark:hover:text-white"
        }`} 
        onClick={() => setTheme("light")} 
      />
      <Moon 
        className={`rounded-md size-7 p-1 border transition-all duration-300 cursor-pointer ${
          theme === "dark" 
            ? "text-white bg-black/85 hover:p-0.5 dark:bg-white dark:text-black" 
            : "hover:text-black hover:p-0.5"
        }`} 
        onClick={() => setTheme("dark")} 
      />
      <SunMoon 
        className={`rounded-md size-7 p-1 border transition-all duration-300 cursor-pointer ${
          theme === "system" 
            ? "text-white bg-black/85 hover:p-0.5" 
            : "hover:text-black hover:p-0.5 dark:hover:text-white"
        }`} 
        onClick={() => setTheme("system")} 
      />
    </div>
  );
}
