import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");

    const login = async(data) => {
        setError("");
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message || "Login failed")
        }
    }
  return (
    <div className='flex items-center justify-center w-full py-16'>
        <div className={`mx-auto w-full max-w-lg bg-light/90 backdrop-blur-sm rounded-2xl p-10 border border-accent/30 card-shadow`}>
        <div className="mb-6 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                </span>
        </div>
        <h2 className="text-center text-3xl font-bold leading-tight text-primary mb-2">Welcome Back</h2>
        <p className="text-center text-base text-secondary/80 mb-6">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline hover:text-secondary"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-500 mt-4 text-center bg-red-50 p-3 rounded-lg border border-red-200'>{error}</p>}

        <form onSubmit = {handleSubmit(login)} className='mt-8'>
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
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    {...register("password",{
                        required:true
                    })}
                />

                <Button type="submit" className='w-full'>Log in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login