import React from 'react'
import css from './css/Content.module.css'

function PostItems(props) {
    return (
        <div>
            {
                props.savedPosts.map(post => {
                    // Extra task destructuring 
                    const { title, name, image, description } = post
                    return <div key={title}>
                        <p>{title}</p>
                        <p>{name}</p>
                        <img src={image} alt="random" />
                        <p>{description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default PostItems