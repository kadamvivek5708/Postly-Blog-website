import React, { forwardRef, useId } from 'react'

function Select({
  options = [],
  label,
  className = '',
  ...props
}, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className='inline-block mb-2 pl-1 font-medium text-primary'>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          ref={ref}
          className={`appearance-none px-4 py-3 rounded-lg bg-white text-primary outline-none focus:bg-light focus:ring-2 focus:ring-secondary transition-all duration-200 border border-accent/30 w-full ${className}`}
          {...props}
        >
          {options?.map((option) => (
            <option key={option} value={option} className="text-primary bg-white">
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-secondary">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Select);