import React, { Component } from 'react'
import css from './css/Content.module.css'
import postsData from '../posts.json'
import PostItems from './PostItems'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: [],
      }
    }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ isLoaded: true,
        posts: postsData.savedPosts,
       })
    },2000)
  }

  handleChange = (event) => {
    const name = event.target.value
    const filteredPosts = postsData.savedPosts.filter(post => post.name.toLowerCase().includes(name.toLowerCase()) )
    this.setState({ posts: filteredPosts})
  }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
        <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search</label>
            <input id="searchInput" type='search' onChange={this.handleChange} placeholder='By Author'/>
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
            
        </div>
        <div className={css.SearchItem}>
          {
            this.state.isLoaded ? <PostItems savedPosts={this.state.posts} /> : <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Content