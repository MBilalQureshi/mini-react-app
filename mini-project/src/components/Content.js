import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItems from './PostItems'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
      }
    }

  componentDidMount(){
    console.log('ssss')
    setTimeout(()=>{
      this.setState({ isLoaded: true })
    },2000)
  }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
        </div>
        <div className={css.SearchItem}>
          {
            this.state.isLoaded ? <PostItems savedPosts={savedPosts} /> : <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Content