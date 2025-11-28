'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GearBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current.appendChild(renderer.domElement)

        // Create gear geometry
        const createGear = (radius: number, teeth: number, depth: number) => {
            const shape = new THREE.Shape()
            const toothAngle = (Math.PI * 2) / teeth

            for (let i = 0; i < teeth; i++) {
                const angle = i * toothAngle
                const nextAngle = (i + 1) * toothAngle

                // Outer tooth
                const outerRadius = radius + depth
                const innerRadius = radius

                if (i === 0) {
                    shape.moveTo(
                        Math.cos(angle) * outerRadius,
                        Math.sin(angle) * outerRadius
                    )
                }

                shape.lineTo(
                    Math.cos(angle + toothAngle * 0.2) * outerRadius,
                    Math.sin(angle + toothAngle * 0.2) * outerRadius
                )
                shape.lineTo(
                    Math.cos(angle + toothAngle * 0.3) * innerRadius,
                    Math.sin(angle + toothAngle * 0.3) * innerRadius
                )
                shape.lineTo(
                    Math.cos(angle + toothAngle * 0.7) * innerRadius,
                    Math.sin(angle + toothAngle * 0.7) * innerRadius
                )
                shape.lineTo(
                    Math.cos(angle + toothAngle * 0.8) * outerRadius,
                    Math.sin(angle + toothAngle * 0.8) * outerRadius
                )
                shape.lineTo(
                    Math.cos(nextAngle) * outerRadius,
                    Math.sin(nextAngle) * outerRadius
                )
            }

            const extrudeSettings = {
                depth: 0.3,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.1,
                bevelSegments: 3
            }

            return new THREE.ExtrudeGeometry(shape, extrudeSettings)
        }

        // Create multiple gears
        const gears: THREE.Mesh[] = []

        // Main gear
        const geometry1 = createGear(2, 16, 0.3)
        const material1 = new THREE.MeshPhongMaterial({
            color: 0x6C63FF,
            emissive: 0x6C63FF,
            emissiveIntensity: 0.3,
            shininess: 100,
            transparent: true,
            opacity: 0.6
        })
        const gear1 = new THREE.Mesh(geometry1, material1)
        gear1.position.set(8, 3, -5)
        scene.add(gear1)
        gears.push(gear1)

        // Secondary gear
        const geometry2 = createGear(1.5, 12, 0.25)
        const material2 = new THREE.MeshPhongMaterial({
            color: 0x4FACFE,
            emissive: 0x4FACFE,
            emissiveIntensity: 0.3,
            shininess: 100,
            transparent: true,
            opacity: 0.5
        })
        const gear2 = new THREE.Mesh(geometry2, material2)
        gear2.position.set(6, -2, -3)
        scene.add(gear2)
        gears.push(gear2)

        // Tertiary gear
        const geometry3 = createGear(1, 10, 0.2)
        const material3 = new THREE.MeshPhongMaterial({
            color: 0xF093FB,
            emissive: 0xF093FB,
            emissiveIntensity: 0.3,
            shininess: 100,
            transparent: true,
            opacity: 0.4
        })
        const gear3 = new THREE.Mesh(geometry3, material3)
        gear3.position.set(9, -4, -2)
        scene.add(gear3)
        gears.push(gear3)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        const pointLight1 = new THREE.PointLight(0x6C63FF, 1, 100)
        pointLight1.position.set(10, 10, 10)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(0x4FACFE, 1, 100)
        pointLight2.position.set(-10, -10, 10)
        scene.add(pointLight2)

        camera.position.z = 10

        // Animation
        let animationFrameId: number
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            // Rotate gears
            gear1.rotation.z += 0.005
            gear2.rotation.z -= 0.007
            gear3.rotation.z += 0.009

            // Subtle floating animation
            gear1.position.y = 3 + Math.sin(Date.now() * 0.001) * 0.2
            gear2.position.y = -2 + Math.cos(Date.now() * 0.0015) * 0.15
            gear3.position.y = -4 + Math.sin(Date.now() * 0.002) * 0.1

            renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement)
            }
            geometry1.dispose()
            geometry2.dispose()
            geometry3.dispose()
            material1.dispose()
            material2.dispose()
            material3.dispose()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.4
            }}
        />
    )
}
