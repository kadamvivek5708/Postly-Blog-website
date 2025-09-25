import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'

function MyPosts() {
    const [posts,setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts([Query.equal("userId", userData.$id)]).then((posts)=>{
                if(posts) {
                    setPosts(posts.documents)
                }
            })
        }
    },[userData])
  return (
    <div className='w-full py-12'>
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">My Posts</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">Manage and edit your published articles</p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-light/80 backdrop-blur-sm rounded-3xl p-12 card-shadow border border-accent/20 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-light">✏️</span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">No posts yet</h2>
              <p className="text-secondary mb-6">Start sharing your thoughts with the world!</p>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {posts.map((post) => (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export default MyPosts