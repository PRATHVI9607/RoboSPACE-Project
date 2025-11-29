'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'morning' | 'night'
type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('morning')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
            document.body.className = savedTheme
        } else {
            // Auto-detect based on time (6 AM - 6 PM = morning)
            const hour = new Date().getHours()
            const autoTheme = hour >= 6 && hour < 18 ? 'morning' : 'night'
            setTheme(autoTheme)
            document.body.className = autoTheme
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'morning' ? 'night' : 'morning'
        setTheme(newTheme)
        document.body.className = newTheme
        localStorage.setItem('theme', newTheme)
    }

    // Prevent hydration mismatch by only rendering after mount
    // However, we must provide the context to children even if not mounted yet (for SSR/initial render)
    // or handle the loading state differently. 
    // For now, we render the provider to avoid 'useTheme' errors in children.

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
        </ThemeContext.Provider>
    )
}
