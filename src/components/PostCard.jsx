import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({$id, title, featured_image}) {
  // const imageUrl = appwriteService.getFilePreview(featuredImage);
  // console.log('Image URL:', imageUrl);
  return (
    <Link to={`/post/${$id}`}  className="h-full">
        <div className='w-full bg-gray-100 rounded-xl p-4 h-full flex flex-col'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFileView(featured_image)} alt={title} className='rounded-xl w-full h-40 object-cover'/>
            </div>
            <h2 className='text-xl font-bold truncate'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard