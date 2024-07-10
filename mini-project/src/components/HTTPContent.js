import React, { Component } from 'react'
import css from './css/Content.module.css'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'
import HTTPPostItems from './HTTPPostItems'

export class HTTPContent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: [],
         savedPosts:[],
      }
    }

  componentDidMount(){
    this.fetchImages();
  }

  fetchImages = async () => {
    try{
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
        const fetchedPosts = response.data.hits
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }catch(err){
        console.log(err)
    }
  }

  handleChange = (event) => {
    const name = event.target.value
    // This is where filtering is done and the posts are updated, it's very simple.
    const filteredPosts = this.state.savedPosts.filter(post => post.user.toLowerCase().includes(name.toLowerCase()))
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
            this.state.isLoaded ? <HTTPPostItems savedPosts={this.state.posts} /> : <Loader />
          }
        </div>
      </div>
    )
  }
}

export default HTTPContent