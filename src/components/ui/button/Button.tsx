import React, { ReactNode } from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md'
  variant?: 'primary' | 'outline'
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  as?: 'button' | 'a' | 'link'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  startIcon,
  endIcon,
  onClick,
  className = '',
  disabled = false,
  as = 'button',
  href = '#',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    xs: 'px-3 py-2 text-sm',
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-4 py-3 text-sm',
    xl: 'px-4 py-3.5 text-md',
  }

  const variantClasses = {
    primary:
      'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
    outline:
      'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
  }

  const classNames = `inline-flex items-center justify-center font-medium gap-2 rounded-lg transition ${className} ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${
    disabled ? 'cursor-not-allowed opacity-50' : ''
  }`

  if (as === 'link') {
    return (
      <Link
        href={href}
        className={classNames}
      >
        {startIcon && <span className="flex items-center">{startIcon}</span>}
        {children}
        {endIcon && <span className="flex items-center">{endIcon}</span>}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a
        href={href}
        className={classNames}
      >
        {startIcon && <span className="flex items-center">{startIcon}</span>}
        {children}
        {endIcon && <span className="flex items-center">{endIcon}</span>}
      </a>
    )
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  )
}

export default Button
