import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from "react-hook-form"

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState('');
    const {register,handleSubmit} = useForm();

    const create = async(data) =>{
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="mx-auto w-full max-w-lg bg-light rounded-2xl p-12 border border-accent/30 card-shadow">
        <div className="mb-6 flex justify-center">
          {/* <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-accent/20">
            <span className="inline-block w-full max-w-[160px]">
              <Logo width="100%" />
            </span>
          </div> */}
        </div>
        <h2 className="text-center text-3xl font-bold leading-tight text-primary mb-2">Create Account</h2>
        <p className="text-center text-sm text-secondary mb-6">
          Already have an account?&nbsp;
          <Link to="/login" className="font-medium text-primary transition-colors duration-200 hover:underline hover:text-secondary">
            Sign In
          </Link>
        </p>

        {error && (
          <div className="mt-4 mb-2 flex items-start gap-3 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-0.5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.5a.75.75 0 011.5 0v5a.75.75 0 01-1.5 0v-5zM10 14.75a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className='text-sm'>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(create)} className='mt-8'>
          <div className='space-y-5'>
            <Input 
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email",{
                required:true,
                validate:{
                  matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
                }
              })}
            />

            <Input 
              label="Name"
              placeholder="Enter your name"
              type="text"
              {...register("name",{ required:true })}
            />

            <Input 
              label="Password"
              placeholder="Enter password"
              type="password"
              {...register("password",{ required:true })}
            />

            <Button type="submit" className='w-full' variant="primary" size='md'>Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;