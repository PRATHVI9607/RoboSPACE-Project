'use client'

import { Target, Eye, Users } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>About <span className="gradient-text">RoboSpace</span></h2>
                    <p className={styles.subtitle}>
                        An EdTech initiative focused on transforming education through experiential
                        learning in robotics and automation
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.mainCard + ' card'}>
                        <p className={styles.description}>
                            RoboSpace is an EdTech initiative focused on transforming education through
                            experiential learning in robotics and automation. We partner with schools to
                            deliver customized programs that blend technology with creativity, preparing
                            students for a tech-driven future.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.card + ' card'}>
                            <div className={styles.iconWrapper}>
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To make robotics and innovation education accessible to every school
                                and every student.
                            </p>
                        </div>

                        <div className={styles.card + ' card'}>
                            <div className={styles.iconWrapper}>
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To inspire young minds to think, build, and solve using real-world
                                STEM applications.
                            </p>
                        </div>

                        <div className={styles.card + ' card'}>
                            <div className={styles.iconWrapper}>
                                <Users size={32} />
                            </div>
                            <h3>Our Approach</h3>
                            <p>
                                Hands-on learning experiences that combine robotics, coding, and
                                creative problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
