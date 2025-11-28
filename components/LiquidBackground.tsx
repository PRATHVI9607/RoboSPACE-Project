'use client'

export default function LiquidBackground() {
    return (
        <>
            {/* Liquid Blob Background */}
            <div className="liquid-background">
                <div className="liquid-blob blob-1" />
                <div className="liquid-blob blob-2" />
                <div className="liquid-blob blob-3" />
            </div>

            {/* Animated SVG Waves */}
            <svg
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '200px',
                    zIndex: -1,
                    opacity: 0.3,
                    pointerEvents: 'none', // Fix scrolling
                }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="url(#wave-gradient)"
                    fillOpacity="0.6"
                    d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                    <animate
                        attributeName="d"
                        dur="10s"
                        repeatCount="indefinite"
                        values="
              M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </path>
                <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Top Wave */}
            <svg
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '150px',
                    zIndex: -1,
                    opacity: 0.2,
                    transform: 'rotate(180deg)',
                    pointerEvents: 'none', // Fix scrolling
                }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="url(#wave-gradient-top)"
                    fillOpacity="0.5"
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                    <animate
                        attributeName="d"
                        dur="12s"
                        repeatCount="indefinite"
                        values="
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,90.7C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    />
                </path>
                <defs>
                    <linearGradient id="wave-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="50%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Circles */}
            <svg
                style={{
                    position: 'fixed',
                    top: '20%',
                    right: '10%',
                    width: '100px',
                    height: '100px',
                    zIndex: -1,
                    opacity: 0.15,
                    pointerEvents: 'none', // Fix scrolling
                }}
            >
                <circle cx="50" cy="50" r="40" fill="url(#circle-gradient)">
                    <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                </circle>
                <defs>
                    <radialGradient id="circle-gradient">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            <svg
                style={{
                    position: 'fixed',
                    bottom: '30%',
                    left: '15%',
                    width: '80px',
                    height: '80px',
                    zIndex: -1,
                    opacity: 0.15,
                    pointerEvents: 'none', // Fix scrolling
                }}
            >
                <circle cx="40" cy="40" r="30" fill="url(#circle-gradient-2)">
                    <animate attributeName="r" values="30;35;30" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
                </circle>
                <defs>
                    <radialGradient id="circle-gradient-2">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </>
    )
}
