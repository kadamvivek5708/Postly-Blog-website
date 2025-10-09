import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

// Removed 'useNavigate' as it's not needed
function PostCard({$id, title, featured_image}) {
    const authStatus = useSelector((state) => state.auth.status)

  // We will use only the Link component for navigation.
  // The outer div and the onClick handler have been removed.
  return (
    <Link to={authStatus ? `/post/${$id}` : '/login'}  className="h-full block">
        <div className='w-full bg-light rounded-2xl p-5 h-full flex flex-col card-shadow card-hover border border-accent/20 backdrop-blur-sm'>
            <div className='w-full h-48 justify-center mb-4 overflow-hidden rounded-xl bg-primary/10'>
                <img src={appwriteService.getFileView(featured_image)} alt={title} className='rounded-xl w-full h-full object-contain transition-transform duration-300 hover:scale-110'/>
            </div>
            <h2 className='text-xl font-bold text-primary mb-2 line-clamp-2 flex-grow'>{title}</h2>
            <div className='mt-auto pt-3 border-t border-accent/30'>
                <span className='text-secondary text-sm font-medium'>
                    {authStatus ? 'Read more →' : 'Log in to Read →'}
                </span>
            </div>
        </div>
    </Link>
  )
}

export default PostCard