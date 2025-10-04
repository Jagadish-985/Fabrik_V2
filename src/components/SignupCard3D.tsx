import { useState } from 'react'
import { Text } from '@react-three/drei'
import { InputField3D } from './InputField3D'
import { Button3D } from './Button3D'

interface SignupCard3DProps {
  position: [number, number, number]
  onSwitchToLogin: () => void
}

export function SignupCard3D({ position, onSwitchToLogin }: SignupCard3DProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hoveredLink, setHoveredLink] = useState<'terms' | 'privacy' | null>(null)

  const handleSignup = () => {
    console.log('Signup attempt:', { firstName, lastName, email, password })
    // Add signup logic here
  }

  const handleTermsClick = () => {
    window.open('https://www.fabrik.space/terms-and-conditions', '_blank')
  }

  const handlePrivacyClick = () => {
    window.open('https://www.fabrik.space/privacy-policy', '_blank')
  }

  const isFormValid = 
    firstName.trim() !== '' && 
    lastName.trim() !== '' && 
    email.trim() !== '' && 
    password.trim() !== '' && 
    confirmPassword.trim() !== '' &&
    password === confirmPassword

  return (
    <group position={position}>
      {/* Card Background */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[3.2, 5.0, 0.1]} />
        <meshStandardMaterial color="#c4c4c4" />
      </mesh>
      
      {/* Card Shadow */}
      <mesh position={[0.05, -0.05, -0.03]}>
        <boxGeometry args={[3.2, 5.0, 0.05]} />
        <meshStandardMaterial 
          color="#000000" 
          transparent 
          opacity={0.2} 
        />
      </mesh>

      {/* Logo Text - fabrik */}
      <Text
        position={[0, 1.95, 0.06]}
        fontSize={0.18}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
      >
        fabrik
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 1.73, 0.06]}
        fontSize={0.06}
        color="#374151"
        anchorX="center"
        anchorY="middle"
      >
        Create your account to get started
      </Text>

      {/* Login Tab (Inactive) - Clickable */}
      <mesh 
        position={[-0.6, 1.4, 0.055]}
        onClick={(e) => {
          e.stopPropagation()
          onSwitchToLogin()
        }}
        onPointerEnter={(e) => {
          e.stopPropagation()
        }}
        onPointerLeave={(e) => {
          e.stopPropagation()
        }}
        userData={{ testId: 'login-tab' }}
      >
        <boxGeometry args={[1.2, 0.35, 0.02]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      <Text
        position={[-0.6, 1.4, 0.07]}
        fontSize={0.09}
        color="#4b5563"
        anchorX="center"
        anchorY="middle"
      >
        Login
      </Text>

      {/* Signup Tab (Active) */}
      <mesh position={[0.6, 1.4, 0.06]}>
        <boxGeometry args={[1.2, 0.35, 0.02]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>

      <Text
        position={[0.6, 1.4, 0.07]}
        fontSize={0.09}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Sign Up
      </Text>

      {/* First Name Label */}
      <Text
        position={[-1.35, 0.95, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        First Name
      </Text>

      {/* First Name Field */}
      <InputField3D
        position={[-0.7, 0.73, 0.06]}
        value={firstName}
        onChange={setFirstName}
        placeholder="First name"
        testId="firstname-input"
        width={1.25}
      />

      {/* Last Name Label */}
      <Text
        position={[0.05, 0.95, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Last Name
      </Text>

      {/* Last Name Field */}
      <InputField3D
        position={[0.7, 0.73, 0.06]}
        value={lastName}
        onChange={setLastName}
        placeholder="Last name"
        testId="lastname-input"
        width={1.25}
      />

      {/* Email Label */}
      <Text
        position={[-1.35, 0.33, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Email
      </Text>

      {/* Email Field */}
      <InputField3D
        position={[0, 0.11, 0.06]}
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
        type="email"
        testId="email-input"
        width={2.7}
      />

      {/* Password Label */}
      <Text
        position={[-1.35, -0.29, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Password
      </Text>

      {/* Password Field */}
      <InputField3D
        position={[0, -0.51, 0.06]}
        value={password}
        onChange={setPassword}
        placeholder="Password"
        type="password"
        testId="password-input"
        width={2.7}
      />

      {/* Confirm Password Label */}
      <Text
        position={[-1.35, -0.91, 0.06]}
        fontSize={0.065}
        color="#374151"
        anchorX="left"
        anchorY="middle"
      >
        Confirm Password
      </Text>

      {/* Confirm Password Field */}
      <InputField3D
        position={[0, -1.13, 0.06]}
        value={confirmPassword}
        onChange={setConfirmPassword}
        placeholder="Confirm Password"
        type="password"
        testId="confirm-password-input"
        width={2.7}
        error={confirmPassword && password !== confirmPassword ? "Passwords do not match" : undefined}
      />

      {/* Create Account Button */}
      <Button3D
        position={[0, -1.7, 0.06]}
        onClick={handleSignup}
        disabled={!isFormValid}
        testId="create-account-button"
        width={2.7}
      >
        Create Account
      </Button3D>

      {/* Terms and Conditions Text */}
      <Text
        position={[0, -2.05, 0.06]}
        fontSize={0.055}
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
        position={[-0.4, -2.25, 0.06]}
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
        position={[-0.4, -2.25, 0.07]}
        fontSize={0.055}
        color={hoveredLink === 'terms' ? "#4338ca" : "#6366f1"}
        anchorX="center"
        anchorY="middle"
      >
        Terms of Service
      </Text>

      {/* "and" text */}
      <Text
        position={[0.13, -2.25, 0.06]}
        fontSize={0.055}
        color="#4b5563"
        anchorX="center"
        anchorY="middle"
      >
        and
      </Text>

      {/* Privacy Policy Link */}
      <mesh
        position={[0.6, -2.25, 0.06]}
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
        position={[0.6, -2.25, 0.07]}
        fontSize={0.055}
        color={hoveredLink === 'privacy' ? "#4338ca" : "#6366f1"}
        anchorX="center"
        anchorY="middle"
      >
        Privacy Policy
      </Text>
    </group>
  )
}
