import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Partner from '@/components/Partner'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import LiquidBackground from '@/components/LiquidBackground'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
    return (
        <main>
            <LiquidBackground />
            <Navbar />
            <Hero />
            <ScrollReveal>
                <About />
            </ScrollReveal>
            <ScrollReveal>
                <Programs />
            </ScrollReveal>
            <ScrollReveal>
                <Partner />
            </ScrollReveal>
            <ScrollReveal>
                <Careers />
            </ScrollReveal>
            <Footer />
        </main>
    )
}
