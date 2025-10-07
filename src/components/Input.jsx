import React, { useId, forwardRef } from 'react'

const Input = forwardRef(function Input({
  label,
  type = 'text',
  className = '',
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={id} className='inline-block mb-2 pl-1 font-medium text-primary'>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`px-4 py-3 rounded-lg bg-white text-primary placeholder-secondary/70 outline-none focus:bg-light focus:ring-2 focus:ring-secondary transition-all duration-200 border border-accent/30 w-full ${className}`}
        {...props}
      />
    </div>
  )
})

export default Input