import { useState } from 'react'
import { Text } from '@react-three/drei'

interface Button3DProps {
  position: [number, number, number]
  onClick: () => void
  children: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  width?: number
  testId?: string
}

export function Button3D({ 
  position, 
  onClick, 
  children, 
  disabled = false,
  variant = 'primary',
  width = 3.2,
  testId
}: Button3DProps) {
  const [hovered, setHovered] = useState(false)
  
  const bgColor = variant === 'primary' 
    ? (disabled ? "#9ca3af" : hovered ? "#4338ca" : "#6366f1")
    : (disabled ? "#f3f4f6" : hovered ? "#e5e7eb" : "#ffffff")
  
  const textColor = variant === 'primary' ? "#ffffff" : (disabled ? "#9ca3af" : "#374151")

  return (
    <group position={position} userData={{ testId }}>
      {/* Button Shadow */}
      <mesh position={[0.02, -0.02, -0.01]}>
        <boxGeometry args={[width, 0.35, 0.02]} />
        <meshStandardMaterial 
          color="#000000" 
          transparent 
          opacity={0.2} 
        />
      </mesh>
      
      {/* Button Background */}
      <mesh
        scale={hovered && !disabled ? 1.01 : 1}
        onClick={(e) => {
          e.stopPropagation()
          if (!disabled) onClick()
        }}
        onPointerEnter={(e) => {
          e.stopPropagation()
          if (!disabled) {
            setHovered(true)
          }
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
          setHovered(false)
        }}
      >
        <boxGeometry args={[width, 0.35, 0.03]} />
        <meshStandardMaterial color={bgColor} />
      </mesh>
      
      {/* Button Border for secondary */}
      {variant === 'secondary' && (
        <mesh position={[0, 0, -0.005]}>
          <boxGeometry args={[width + 0.015, 0.365, 0.025]} />
          <meshStandardMaterial 
            color="#d1d5db" 
            transparent 
            opacity={0.6} 
          />
        </mesh>
      )}

      <Text
        position={[0, 0, 0.03]}
        fontSize={0.09}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </group>
  )
}
