import React,{useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import {Container,PostCard} from '../components'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [posts,setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])


    if (posts.length === 0) {
        return (
            <div className="w-full py-16 text-center">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-8 w-full max-w-2xl">
                            <div className="bg-light/80 backdrop-blur-sm rounded-3xl p-12 card-shadow border border-accent/20">
                                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl text-light">📚</span>
                                </div>
                                <h1 className="text-3xl font-bold text-primary mb-4">
                                    Welcome to Our Blog
                                </h1>
                                <p className="text-lg text-secondary mb-6">
                                    Login to discover amazing articles and share your thoughts
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Button onclick={navigate("/login")} bgColor="bg-primary" textColor="text-light">Get Started</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        ) 
    }
    return (
    <div className='w-full py-12'>
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Latest Blog Posts</h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">Discover our collection of thoughtful articles and insights</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className=''>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
    </div>
  )
}

export default Home