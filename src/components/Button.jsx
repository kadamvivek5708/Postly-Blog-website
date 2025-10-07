import React from 'react'

const variantClasses = {
  primary: 'bg-primary text-light hover:bg-primary/90',
  secondary: 'bg-secondary text-light hover:bg-secondary/90',
  accent: 'bg-accent text-primary hover:bg-accent/90',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const base = 'rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-[0.98] font-medium shadow-md card-shadow focus:outline-none focus:ring-2 focus:ring-secondary/60';
  const variantClass = variantClasses[variant] || variantClasses.primary;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button