'use client'

import { useState } from 'react'
import { Briefcase, Send } from 'lucide-react'
import styles from './Careers.module.css'

export default function Careers() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const positions = [
        {
            title: 'Business Development Executive (BDE)',
            type: 'Full-time',
            description: 'Drive partnerships with schools and educational institutions'
        },
        {
            title: 'Robotics Trainer',
            type: 'Part-time/Full-time',
            description: 'Conduct workshops and train students in robotics and programming'
        },
        {
            title: 'Intern – Workshop Assistant',
            type: 'Internship',
            description: 'Support workshop operations and student engagement'
        }
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/careers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    resume: '',
                    message: ''
                })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch (error) {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="careers" className={styles.careers}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Join Our <span className="gradient-text">Team</span></h2>
                    <p className={styles.subtitle}>
                        We're looking for passionate educators, engineers, and outreach executives
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.positions}>
                        <h3 className={styles.sectionTitle}>Current Openings</h3>
                        <div className={styles.positionGrid}>
                            {positions.map((position, index) => (
                                <div key={index} className={styles.positionCard + ' card'}>
                                    <div className={styles.positionIcon}>
                                        <Briefcase size={24} />
                                    </div>
                                    <h4 className={styles.positionTitle}>{position.title}</h4>
                                    <span className={styles.positionType}>{position.type}</span>
                                    <p className={styles.positionDescription}>{position.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formWrapper + ' card'}>
                        <h3 className={styles.formTitle}>Apply Now</h3>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <div className={styles.formRow}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '14px 20px',
                                    borderRadius: '12px',
                                    border: '2px solid rgba(74, 144, 226, 0.3)',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '16px',
                                    fontFamily: 'Inter, sans-serif',
                                    outline: 'none'
                                }}
                            >
                                <option value="">Select Position *</option>
                                {positions.map((pos, idx) => (
                                    <option key={idx} value={pos.title}>{pos.title}</option>
                                ))}
                            </select>

                            <input
                                type="url"
                                name="resume"
                                placeholder="Resume Link (Google Drive/Dropbox) *"
                                value={formData.resume}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Why do you want to join RoboSpace?"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={status === 'loading'}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                {status === 'loading' ? 'Submitting...' : (
                                    <>
                                        <Send size={20} />
                                        Submit Application
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className={styles.successMessage}>
                                    ✓ Application submitted! We'll review and get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    ✗ Something went wrong. Please try again or email us at careers@robospace.in
                                </div>
                            )}
                        </form>

                        <p className={styles.emailNote}>
                            Or email your resume to: <a href="mailto:careers@robospace.in">careers@robospace.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
