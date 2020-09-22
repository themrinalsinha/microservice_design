import React      from 'react'
import PostList   from './PostList'
import PostCreate from './PostCreate'

export default () => {
    return <div className="container">
        <h1>create post</h1>
        <PostCreate />
        <hr/>
        <h2>posts</h2>
        <PostList />
    </div>
}
