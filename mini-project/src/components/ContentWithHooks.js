import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import postsData from '../posts.json'
import PostItems from './PostItems'
import Loader from './Loader'

function ContentWithHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            console.log('timeoUt')
            setIsLoaded(true)
            setPosts(postsData.savedPosts)
          },2000)

          return () => {
            clearTimeout(timeOut)
          }
    },[])

    const handleChange = (event) => {
        const name = event.target.value;
        const filteredPosts = postsData.savedPosts.filter(post => post.name.toLowerCase().includes(name.toLowerCase()))
        setPosts(filteredPosts)
    }
  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
        <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search</label>
            <input id="searchInput" type='search' onChange={handleChange} placeholder='By Author'/>
            <h4>posts found: {posts.length}</h4>
          </form>
            
        </div>
        <div className={css.SearchItem}>
          {
            isLoaded ? <PostItems savedPosts={posts} /> : <Loader />
          }
        </div>
      </div>
  )
}

export default ContentWithHooks