"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useRef } from "react"

function Model() {
  const { scene } = useGLTF("./Models/forestBlend.glb")
  return <primitive object={scene} position={[15, -24, 2]}
  rotation={[0, Math.PI / 8, 0]}
  scale={4} />
}

function BotModel() {
  const { scene } = useGLTF("./Models/base.glb")
  const ref = useRef()
  let t = 0

  useFrame((state, delta) => {
    if (!ref.current) return

    // Moving forward until z=10
    if (ref.current.position.z < 10) {
      ref.current.position.z += 0.05

      // Mini vibration effect (active only while moving)
      t += delta * 10
      ref.current.position.x = 5 + Math.sin(t * 10) * 0.05
      ref.current.position.y = -10.5 + Math.sin(t * 15) * 0.03
    } else {
      // Stop vibration → lock position
      ref.current.position.set(5, -10.5, 10)
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[5, -10.5, -20]} // starting pos
      scale={6}
      rotation={[0, Math.PI / -30, 0]}
    />
  )
}

export default function HeroModel() {
  return (
    <div className="bg-yellow-700 h-screen w-screen">
      <Canvas>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[-10, 2, 30]} 
        fov={75} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Models */}
        <Model />
        <BotModel />

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
