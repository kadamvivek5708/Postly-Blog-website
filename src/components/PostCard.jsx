import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({$id, title, featured_image}) {
  // const imageUrl = appwriteService.getFilePreview(featuredImage);
  // console.log('Image URL:', imageUrl);
  return (
    <Link to={`/post/${$id}`}  className="h-full block">
        <div className='w-full bg-light rounded-2xl p-5 h-full flex flex-col card-shadow card-hover border border-accent/20 backdrop-blur-sm'>
            <div className='w-full justify-center mb-4 overflow-hidden rounded-xl'>
                <img src={appwriteService.getFileView(featured_image)} alt={title} className='rounded-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-110'/>
            </div>
            <h2 className='text-xl font-bold text-primary mb-2 line-clamp-2 flex-grow'>{title}</h2>
            <div className='mt-auto pt-3 border-t border-accent/30'>
                <span className='text-secondary text-sm font-medium'>Read more →</span>
            </div>
        </div>
    </Link>
  )
}

export default PostCard