import { useState } from 'react'
import { Text } from '@react-three/drei'
import { InputField3D } from './InputField3D'
import { Button3D } from './Button3D'

interface LoginCard3DProps {
  position: [number, number, number]
  onSwitchToSignup: () => void
}

export function LoginCard3D({ position, onSwitchToSignup }: LoginCard3DProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hoveredLink, setHoveredLink] = useState<'terms' | 'privacy' | null>(null)

  const handleLogin = () => {
    console.log('Login attempt:', { email, password })
    
  }

  const handleTermsClick = () => {
    window.open('https://www.fabrik.space/terms-and-conditions', '_blank')
  }

  const handlePrivacyClick = () => {
    window.open('https://www.fabrik.space/privacy-policy', '_blank')
  }

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  return (
    <group position={position}>
      {/* Card Background */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[3.2, 4.8, 0.1]} />
        <meshStandardMaterial color="#c4c4c4" />
      </mesh>
      
      {/* Card Shadow */}
      <mesh position={[0.05, -0.05, -0.03]}>
        <boxGeometry args={[3.2, 4.8, 0.05]} />
        <meshStandardMaterial 
          color="#000000" 
          transparent 
          opacity={0.2} 
        />
      </mesh>

      {/* Logo Text - fabrik */}
      <Text
        position={[0, 2.0, 0.06]}
        fontSize={0.2}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
      >
        fabrik
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 1.75, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="center"
        anchorY="middle"
      >
        Welcome! Let's get you signed in
      </Text>

      {/* Login Tab (Active) */}
      <mesh position={[-0.6, 1.35, 0.06]}>
        <boxGeometry args={[1.2, 0.35, 0.02]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>

      <Text
        position={[-0.6, 1.35, 0.07]}
        fontSize={0.09}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Login
      </Text>

      {/* Signup Tab (Inactive) - Clickable */}
      <mesh 
        position={[0.6, 1.35, 0.055]}
        onClick={(e) => {
          e.stopPropagation()
          onSwitchToSignup()
        }}
        onPointerEnter={(e) => {
          e.stopPropagation()
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
        }}
        userData={{ testId: 'signup-tab' }}
      >
        <boxGeometry args={[1.2, 0.35, 0.02]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      <Text
        position={[0.6, 1.35, 0.07]}
        fontSize={0.09}
        color="#4b5563"
        anchorX="center"
        anchorY="middle"
      >
        Sign Up
      </Text>

      {/* Email Label */}
      <Text
        position={[-1.35, 0.85, 0.06]}
        fontSize={0.07}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Email
      </Text>

      {/* Email Field */}
      <InputField3D
        position={[0, 0.6, 0.06]}
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
        type="email"
        testId="email-input"
        width={2.7}
      />

      {/* Password Label */}
      <Text
        position={[-1.35, 0.15, 0.06]}
        fontSize={0.07}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Password
      </Text>

      {/* Password Field */}
      <InputField3D
        position={[0, -0.1, 0.06]}
        value={password}
        onChange={setPassword}
        placeholder="Password"
        type="password"
        testId="password-input"
        width={2.7}
      />

      {/* Login Button */}
      <Button3D
        position={[0, -0.75, 0.06]}
        onClick={handleLogin}
        disabled={!isFormValid}
        testId="login-button"
        width={2.7}
      >
        Login
      </Button3D>

      {/* Terms and Conditions Text */}
      <Text
        position={[0, -1.35, 0.06]}
        fontSize={0.06}
        color="#4b5563"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.8}
        textAlign="center"
      >
        By continuing, you agree to our
      </Text>

      {/* Terms of Service Link */}
      <mesh
        position={[-0.4, -1.6, 0.06]}
        onClick={(e) => {
          e.stopPropagation()
          handleTermsClick()
        }}
        onPointerEnter={(e) => {
          e.stopPropagation()
          setHoveredLink('terms')
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
          setHoveredLink(null)
        }}
      >
        <boxGeometry args={[0.85, 0.12, 0.01]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>

      <Text
        position={[-0.4, -1.6, 0.07]}
        fontSize={0.06}
        color={hoveredLink === 'terms' ? "#4338ca" : "#6366f1"}
        anchorX="center"
        anchorY="middle"
      >
        Terms of Service
      </Text>

      {/* "and" text */}
      <Text
        position={[0.13, -1.6, 0.06]}
        fontSize={0.06}
        color="#4b5563"
        anchorX="center"
        anchorY="middle"
      >
        and
      </Text>

      {/* Privacy Policy Link */}
      <mesh
        position={[0.6, -1.6, 0.06]}
        onClick={(e) => {
          e.stopPropagation()
          handlePrivacyClick()
        }}
        onPointerEnter={(e) => {
          e.stopPropagation()
          setHoveredLink('privacy')
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
          setHoveredLink(null)
        }}
      >
        <boxGeometry args={[0.7, 0.12, 0.01]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>

      <Text
        position={[0.6, -1.6, 0.07]}
        fontSize={0.06}
        color={hoveredLink === 'privacy' ? "#4338ca" : "#6366f1"}
        anchorX="center"
        anchorY="middle"
      >
        Privacy Policy
      </Text>
    </group>
  )
}
