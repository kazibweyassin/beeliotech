import React from 'react'

interface BeelioLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
  theme?: 'light' | 'dark'
}

const BeelioLogo: React.FC<BeelioLogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  theme = 'light' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  }

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  const iconColor = theme === 'dark' ? '#60A5FA' : '#2563EB'
  const textColor = theme === 'dark' ? 'text-white' : 'text-blue-600'

  const LogoIcon = () => (
    <svg
      className={sizeClasses[size]}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon - representing connection and structure */}
      <path
        d="M24 4L37.856 12V28L24 36L10.144 28V12L24 4Z"
        stroke={iconColor}
        strokeWidth="2"
        fill="url(#gradientBg)"
        opacity="0.1"
      />
      
      {/* Energy waves - representing smart energy */}
      <path
        d="M16 20C16 20 20 16 24 20C28 24 32 20 32 20"
        stroke={iconColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 24C16 24 20 20 24 24C28 28 32 24 32 24"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M16 28C16 28 20 24 24 28C28 32 32 28 32 28"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* Central tech node */}
      <circle
        cx="24"
        cy="24"
        r="3"
        fill={iconColor}
      />
      
      {/* Connection points - representing IoT network */}
      <circle cx="18" cy="18" r="1.5" fill={iconColor} opacity="0.8" />
      <circle cx="30" cy="18" r="1.5" fill={iconColor} opacity="0.8" />
      <circle cx="18" cy="30" r="1.5" fill={iconColor} opacity="0.8" />
      <circle cx="30" cy="30" r="1.5" fill={iconColor} opacity="0.8" />
      
      {/* Connection lines */}
      <line x1="21" y1="21" x2="18" y2="18" stroke={iconColor} strokeWidth="1" opacity="0.5" />
      <line x1="27" y1="21" x2="30" y2="18" stroke={iconColor} strokeWidth="1" opacity="0.5" />
      <line x1="21" y1="27" x2="18" y2="30" stroke={iconColor} strokeWidth="1" opacity="0.5" />
      <line x1="27" y1="27" x2="30" y2="30" stroke={iconColor} strokeWidth="1" opacity="0.5" />
      
      {/* African-inspired pattern accent */}
      <path
        d="M12 14L14 16L12 18"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M36 14L34 16L36 18"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      
      <defs>
        <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={iconColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )

  const LogoText = () => (
    <div className="flex items-center">
      <span className={`font-bold ${textSizes[size]} ${textColor} tracking-tight`}>
        Beelio
      </span>
      <span className={`${textSizes[size]} text-cyan-500 ml-1 font-light`}>
        Tech
      </span>
    </div>
  )

  if (variant === 'icon') {
    return <LogoIcon />
  }

  if (variant === 'text') {
    return <LogoText />
  }

  return (
    <div className="flex items-center space-x-3">
      <LogoIcon />
      <LogoText />
    </div>
  )
}

export default BeelioLogo
