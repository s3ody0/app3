'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Get the actual resolved theme (handles system theme)
    const currentTheme = resolvedTheme || theme
    
    // Toggle between light and dark explicitly
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  // Use resolvedTheme to show the correct icon
  const isDark = resolvedTheme === 'dark' || theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </Button>
  )
}

