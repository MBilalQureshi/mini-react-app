import React from 'react'
import css from './css/Content.module.css'

function HTTPPostItems(props) {
    return (
        <div>
            {
                props.savedPosts.map(post => {
                    return <div key={post.id}>
                        <p>{post.type}</p>
                        <p>{post.user}</p>
                        <img src={post.webformatURL} alt="random" />
                        <p>{post.tags}</p>
                    </div>
                })
            }
        </div>
    )
}

export default HTTPPostItems