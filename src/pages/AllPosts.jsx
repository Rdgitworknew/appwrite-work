import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                console.log(posts);
                
                setPosts(posts.documents)
            }
        })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                         <h2
            className='text-xl font-bold'
            >{post.title}</h2>
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts