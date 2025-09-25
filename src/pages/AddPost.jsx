import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12'> 
    <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Create New Post</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">Share your thoughts and ideas with the world</p>
        </div>
        <div className="bg-light/40 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-accent/20">
          <PostForm/>
        </div>
    </Container>
    </div>
  )
}

export default AddPost