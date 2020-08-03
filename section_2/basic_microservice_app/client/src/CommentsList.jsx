import React from 'react'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

export default ({ comments }) => {
    // NOT REQUIRED...NOW !! :)
    // const [comments, setComments] = useState([])
    // const fetchData = async () => {
    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    //     setComments(res.data)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const renderedComments = comments.map(comment => {
        let content = comment.content
        // if (comment.stats === 'approved') {
        //     content = comment.content
        // }

        if (comment.status === 'pending') {
            content = "This comment is awaiting moderation"
        }

        if (comment.status === 'rejected') {
            content = "This comment has been rejected"
        }
        console.log(comment.content)
        return <li key={comment.id}>{content}</li>
    })

    return <ul>
        { renderedComments }
    </ul>
}