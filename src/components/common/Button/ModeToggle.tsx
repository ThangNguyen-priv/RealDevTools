import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../ui/ThemeProvider"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      {/* Custom Switch */}
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full 
          transition-all duration-500 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          ${isDark 
            ? "bg-gradient-to-r from-blue-600 to-purple-600" 
            : "bg-gradient-to-r from-yellow-200 to-yellow-300"
          }
        `}
      >
        {/* Animated background */}
        <div className={`
          absolute inset-0 rounded-full transition-opacity duration-500
          ${isDark ? "bg-stars opacity-30" : "bg-sun-rays opacity-20"}
        `} />
        
        {/* Switch circle */}
        <div
          className={`
            relative h-5 w-5 transform rounded-full 
            transition-all duration-500 ease-in-out
            flex items-center justify-center
            ${isDark 
              ? "translate-x-5 bg-gray-900 shadow-lg" 
              : "translate-x-0.5 bg-white shadow-md"
            }
          `}
        >
          {/* Icon with rotation */}
          <div className={`transition-transform duration-500 ${isDark ? "rotate-0" : "rotate-180"}`}>
            {isDark ? (
              <Moon className="h-3 w-3 text-blue-300" />
            ) : (
              <Sun className="h-3 w-3 text-yellow-600" />
            )}
          </div>
        </div>
      </button>
      
      {/* Mode indicator */}
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          isDark ? "bg-blue-500" : "bg-yellow-500"
        }`} />
        <span className="text-xs text-muted-foreground capitalize">
          {theme}
        </span>
      </div>
    </div>
  )
}