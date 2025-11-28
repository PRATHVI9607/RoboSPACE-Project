'use client'

import { Sparkles, Rocket, Code } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <Sparkles size={16} />
                        <span>Transforming Education Through Innovation</span>
                    </div>

                    <h1 className={styles.title}>
                        Welcome to <span className="gradient-text">RoboSpace</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Empowering the next generation through robotics, coding, and hands-on STEM education.
                    </p>

                    <p className={styles.description}>
                        At RoboSpace, we bring the future to the classroom. Our robotics programs,
                        training modules, and interactive workshops are designed to help students
                        explore innovation, develop problem-solving skills, and build confidence
                        through technology.
                    </p>

                    <div className={styles.buttons}>
                        <a href="#partner" className="btn-primary">
                            Schedule a Free Demo
                        </a>
                        <a href="#about" className={styles.btnSecondary}>
                            Learn More
                        </a>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h3>Innovation Labs</h3>
                                <p>State-of-the-art facilities</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <Code size={24} />
                            </div>
                            <div>
                                <h3>Hands-on Learning</h3>
                                <p>Real-world applications</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3>Expert Trainers</h3>
                                <p>Industry professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
