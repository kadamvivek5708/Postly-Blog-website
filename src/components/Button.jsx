import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-primary",
    textColor = "text-light",
    classname = "",
    ...props
}) {
  return (
    <button className={`px-6 py-3 rounded-lg ${textColor} ${bgColor} hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105 font-medium shadow-md card-shadow ${classname}`} {...props}>
        {children}
    </button>
  )
}

export default Button