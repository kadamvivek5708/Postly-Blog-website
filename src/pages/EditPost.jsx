import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom'
import { Container,PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const [post,setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            })
        }
    },[slug,navigate])

  return post ? (<div className='py-12'>
    <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Edit Post</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">Make changes to your published article</p>
        </div>
        <div className="bg-light/40 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-accent/20">
          <PostForm post={post} />
        </div>
    </Container>
  </div>) : null
}

export default EditPost