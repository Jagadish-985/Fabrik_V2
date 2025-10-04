import { useState } from 'react'
import { Text } from '@react-three/drei'

interface InputField3DProps {
  position: [number, number, number]
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
  error?: string
  width?: number
  testId?: string
}

export function InputField3D({ 
  position, 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  error,
  width = 3.2,
  testId
}: InputField3DProps) {
  const [focused, setFocused] = useState(false)
  
  const handleClick = () => {
    setFocused(true)
    // In VR, this would trigger a virtual keyboard
    // For now, we'll use browser prompt as a fallback
    const newValue = window.prompt(placeholder, value)
    if (newValue !== null) {
      onChange(newValue)
    }
    setFocused(false)
  }

  // Mask password values
  const displayValue = type === 'password' && value ? '•'.repeat(value.length) : value
  
  return (
    <group position={position} userData={{ testId }}>
      {/* Input Background */}
      <mesh 
        position={[0, 0, 0.01]}
        onClick={handleClick}
        onPointerEnter={(e) => {
          e.stopPropagation()
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
        }}
      >
        <boxGeometry args={[width, 0.35, 0.02]} />
        <meshStandardMaterial 
          color={error ? "#fef2f2" : focused ? "#ffffff" : "#f3f4f6"} 
        />
      </mesh>
      
      {/* Input Border */}
      <mesh position={[0, 0, 0.005]}>
        <boxGeometry args={[width + 0.015, 0.365, 0.015]} />
        <meshStandardMaterial 
          color={error ? "#ef4444" : focused ? "#6366f1" : "#d1d5db"} 
          transparent 
          opacity={0.3}
        />
      </mesh>

      {/* Display Text or Placeholder */}
      <Text
        position={[0, 0, 0.03]}
        fontSize={0.08}
        color={value ? "#1f2937" : "#9ca3af"}
        anchorX="center"
        anchorY="middle"
        maxWidth={width - 0.2}
      >
        {displayValue || placeholder}
      </Text>

      {/* Error text */}
      {error && (
        <Text
          position={[0, -0.25, 0.02]}
          fontSize={0.06}
          color="#ef4444"
          anchorX="center"
          anchorY="middle"
          maxWidth={width - 0.2}
          textAlign="center"
        >
          {error}
        </Text>
      )}
    </group>
  )
}
