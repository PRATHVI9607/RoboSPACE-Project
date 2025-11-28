import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
    title: 'RoboSpace - Empowering the Next Generation Through Robotics',
    description: 'RoboSpace is an EdTech initiative focused on transforming education through experiential learning in robotics and automation. We partner with schools to deliver customized programs.',
    keywords: 'robotics, STEM education, coding, innovation, EdTech, automation, AI',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
