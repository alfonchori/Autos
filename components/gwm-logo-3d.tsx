"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Center, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function RotatingLogo() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.2}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          GWM
          <meshStandardMaterial
            color="#ef4444"
            metalness={0.8}
            roughness={0.2}
            emissive="#ef4444"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>

      <Center position={[0, -1.5, 0]}>
        <Text3D
          font="/fonts/Inter_Regular.json"
          size={0.6}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          HAVAL
          <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.3} />
        </Text3D>
      </Center>
    </group>
  )
}

export function GWMLogo3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        <pointLight position={[0, 5, 5]} intensity={0.5} />

        <RotatingLogo />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
