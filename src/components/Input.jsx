import React,{use, useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    classname = "",
    ...props
},ref) 
{
    const id = useId();
  return (
    <div className='w-full'>
        {
            label && <label className='inline-block mb-2 pl-1 font-medium text-primary' htmlFor={id}>{label}</label> 
        }
        <input type={type} className={`px-4 py-3 rounded-lg bg-white text-primary outline-none focus:bg-light focus:ring-2 focus:ring-secondary duration-300 border border-accent/30 w-full transition-all ${classname}`}
        ref={ref}
        {...props}
        id={id}
        />
    </div>
  )
})

export default Input