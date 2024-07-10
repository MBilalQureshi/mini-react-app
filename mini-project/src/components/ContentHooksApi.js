import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'
import HTTPPostItems from './HTTPPostItems'

function ContentHooksApi() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(()=>{
        fetchImages()
    },[])
    const fetchImages = async () => {
        try{
            const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
            const fetchedPosts = response.data.hits
            setIsLoaded(true)
            setPosts(fetchedPosts)
            setSavedPosts(fetchedPosts)
        }catch(err){
            console.log(err)
        }
      }

    const handleChange = (event) => {
        const name = event.target.value
        // This is where filtering is done and the posts are updated, it's very simple.
        const filteredPosts = savedPosts.filter(post => post.user.toLowerCase().includes(name.toLowerCase()))
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
            isLoaded ? <HTTPPostItems savedPosts={posts} /> : <Loader />
          }
        </div>
      </div>
  )
}

export default ContentHooksApi