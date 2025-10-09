import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  if (loading) {
    return (
        <div className="w-full py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx} className="w-full bg-light rounded-2xl p-5 h-64 card-shadow border border-accent/20 animate-pulse">
                    <div className="w-full h-32 bg-accent/30 rounded-xl mb-4" />
                    <div className="h-5 bg-accent/30 rounded mb-2" />
                    <div className="h-5 bg-accent/20 rounded w-2/3" />
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
  }

  if (posts.length === 0) {
    return (
        <div className="w-full py-16 text-center">
            <div className="bg-light/80 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-auto card-shadow border border-accent/20">
              <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-3">No Posts Yet</h2>
              <p className="text-secondary mb-6">
                {authStatus 
                  ? "Be the first to share your voice. Write your first post!" 
                  // This message is for logged-out users when the blog is brand new
                  : "There are no articles to show right now. Check back later!"
                }
              </p>
              {authStatus && (
                <div className="flex justify-center">
                  <Button onClick={() => navigate('/add-post')} variant="primary" size="md">Create First Post</Button>
                </div>
              )}
            </div>
          </div>
    )
  }
      
  return (
    <div className='w-full py-12'>
        <Container>
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    {authStatus ? `Welcome back, ${userData?.name || 'Reader'}!` : 'Latest Blog Posts'}
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                    {authStatus ? 'Ready to dive in?' : 'Discover our collection of thoughtful articles and insights.'}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2'>
                        {/* FIX: Spread the post object to pass all its properties as props */}
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home;