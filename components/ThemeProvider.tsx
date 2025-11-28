'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'morning' | 'night'>('morning')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('theme') as 'morning' | 'night' | null
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

    if (!mounted) return <>{children}</>

    return (
        <>
            <button
                onClick={toggleTheme}
                className="glass"
                style={{
                    position: 'fixed',
                    top: '24px',
                    right: '80px', // Moved left to avoid mobile menu button
                    zIndex: 9999, // Super high z-index
                    padding: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px', // Slightly smaller
                    height: '48px',
                    transition: 'all 0.3s ease',
                    boxShadow: theme === 'morning'
                        ? '0 8px 24px rgba(14, 165, 233, 0.3)'
                        : '0 8px 24px rgba(59, 130, 246, 0.3)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                }}
                aria-label="Toggle theme"
            >
                {theme === 'morning' ? (
                    <Moon size={26} color="#0EA5E9" strokeWidth={2.5} />
                ) : (
                    <Sun size={26} color="#FFD700" strokeWidth={2.5} />
                )}
            </button>
            {children}
        </>
    )
}
