'use client'

import { Cpu, Lightbulb, Users, Award } from 'lucide-react'
import styles from './Programs.module.css'

export default function Programs() {
    const programs = [
        {
            icon: <Cpu size={32} />,
            title: 'Robotics Workshops',
            description: 'Hands-on sessions where students build and program robots, learning mechanical design and coding fundamentals.',
            features: ['Arduino & Raspberry Pi', 'Sensor Integration', 'Autonomous Robots']
        },
        {
            icon: <Lightbulb size={32} />,
            title: 'Innovation Labs',
            description: 'Complete lab setup with cutting-edge equipment, curriculum, and ongoing support for schools.',
            features: ['State-of-art Equipment', 'Custom Curriculum', '24/7 Support']
        },
        {
            icon: <Users size={32} />,
            title: 'Teacher Training',
            description: 'Professional development programs to empower educators with robotics and STEM teaching skills.',
            features: ['Certification Programs', 'Ongoing Mentorship', 'Resource Materials']
        },
        {
            icon: <Award size={32} />,
            title: 'Competitions & Events',
            description: 'Organize and participate in robotics competitions, hackathons, and innovation challenges.',
            features: ['National Events', 'Team Building', 'Recognition & Awards']
        }
    ]

    return (
        <section id="programs" className={styles.programs}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our <span className="gradient-text">Programs</span></h2>
                    <p className={styles.subtitle}>
                        Comprehensive STEM education solutions designed to inspire and empower students
                    </p>
                </div>

                <div className={styles.grid}>
                    {programs.map((program, index) => (
                        <div key={index} className={styles.programCard + ' card'} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={styles.iconWrapper}>
                                {program.icon}
                            </div>
                            <h3 className={styles.programTitle}>{program.title}</h3>
                            <p className={styles.programDescription}>{program.description}</p>
                            <ul className={styles.featureList}>
                                {program.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className={styles.checkmark}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
