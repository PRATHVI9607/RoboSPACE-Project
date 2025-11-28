'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import styles from './Partner.module.css'

export default function Partner() {
    const [formData, setFormData] = useState({
        schoolName: '',
        contactPerson: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({
                    schoolName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    location: '',
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="partner" className={styles.partner}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Partner With <span className="gradient-text">Us</span></h2>
                    <p className={styles.subtitle}>
                        Are you a school looking to introduce robotics, AI, or STEM? Let's work together
                        to build your school's innovation lab and ignite curiosity in your students.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard + ' card'}>
                            <div className={styles.infoIcon}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 XXX XXX XXXX</p>
                            </div>
                        </div>

                        <div className={styles.infoCard + ' card'}>
                            <div className={styles.infoIcon}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@robospace.in</p>
                            </div>
                        </div>

                        <div className={styles.infoCard + ' card'}>
                            <div className={styles.infoIcon}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>Bangalore, India</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper + ' card'}>
                        <h3 className={styles.formTitle}>Schedule a Free Demo</h3>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="School Name *"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="contactPerson"
                                    placeholder="Contact Person *"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

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

                            <input
                                type="text"
                                name="location"
                                placeholder="School Location *"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Tell us about your requirements..."
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
                                {status === 'loading' ? 'Sending...' : (
                                    <>
                                        <Send size={20} />
                                        Schedule Demo
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className={styles.successMessage}>
                                    ✓ Thank you! We'll contact you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    ✗ Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
