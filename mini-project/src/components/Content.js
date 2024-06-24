import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItems from './PostItems'

export class Content extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
        </div>
        <div className={css.SearchItem}>
            <PostItems savedPosts={savedPosts} />
        </div>
      </div>
    )
  }
}

export default Content