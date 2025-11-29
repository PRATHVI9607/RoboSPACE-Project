'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import styles from './Navbar.module.css'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#programs', label: 'Programs' },
        { href: '#partner', label: 'Partner' },
        { href: '#careers', label: 'Careers' },
    ]

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoPlaceholder}>
                        <img src="/placeholder-logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0 }} />
                    </div>
                    <span className={styles.logoText}>RoboSpace</span>
                </div>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        {theme === 'morning' ? (
                            <Moon size={20} className={styles.themeIcon} />
                        ) : (
                            <Sun size={20} className={styles.themeIcon} />
                        )}
                    </button>
                </div>

                <a href="#partner" className="btn-primary" style={{ display: 'none' }}>
                    Get Started
                </a>

                {/* Mobile Menu Button */}
                <div className={styles.mobileControls}>
                    <button
                        onClick={toggleTheme}
                        className={`${styles.themeToggle} ${styles.mobileThemeToggle}`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'morning' ? (
                            <Moon size={20} className={styles.themeIcon} />
                        ) : (
                            <Sun size={20} className={styles.themeIcon} />
                        )}
                    </button>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Side Drawer */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <span className={styles.logoText}>RoboSpace</span>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.mobileLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
