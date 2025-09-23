import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom'
import { Container,PostForm } from '../components'
import appwriteService from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const [post,setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect((slug)=> {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            })
        }
    },[slug,navigate])

  return post ? (<div className='py-8'>
    <Container>
        <PostForm post={post} />
    </Container>
  </div>) : null
}

export default EditPost