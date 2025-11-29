'use client'

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoPlaceholder}>
                                <img src="/placeholder-logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0 }} />
                            </div>
                            <span className={styles.logoText} >RoboSpace</span>
                        </div>
                        <p className={styles.tagline}>
                            Empowering the next generation through robotics and STEM education
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className={styles.socialLink}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" aria-label="GitHub" className={styles.socialLink}>
                                <Github size={20} />
                            </a>
                            <a href="mailto:contact@robospace.in" aria-label="Email" className={styles.socialLink}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4>Quick Links</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#programs">Programs</a>
                            <a href="#partner">Partner</a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Programs</h4>
                            <a href="#programs">Robotics Workshops</a>
                            <a href="#programs">Innovation Labs</a>
                            <a href="#programs">Teacher Training</a>
                            <a href="#programs">Competitions</a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Contact</h4>
                            <a href="mailto:contact@robospace.in">contact@robospace.in</a>
                            <a href="mailto:careers@robospace.in">careers@robospace.in</a>
                            <a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a>
                            <a href="#">Bangalore, India</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} RoboSpace. All rights reserved.
                    </p>
                    <p className={styles.madeWith}>
                        Made with <Heart size={16} className={styles.heart} /> for the future innovators
                    </p>
                </div>
            </div>
        </footer>
    )
}
