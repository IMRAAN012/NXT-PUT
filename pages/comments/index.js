import { useState } from 'react'

function CommentPage() {

    const [ironman, setComments] = useState([])
    const [post, setPost] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments/first')
        const data = await response.json()
        setComments(data)
    }

    const submitPost = async () => {
        const response = await fetch('/api/comments/first', {
            method: 'POST',
            body: JSON.stringify({ post }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const updateComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data'
        }
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return(
        <>
            <input type='text' value={post} onChange={(e) => setPost(e.target.value)}></input>
            <button onClick={submitPost}>Submit</button>
            <button onClick={fetchComments}>Load Comments</button>
            {ironman.map(comment => {
                return(
                <div key={comment.id}>
                    {comment.id} {comment.name}
                    <button onClick={() => deleteComment(comment.id)}>DELETE</button>
                    <button onClick={() => updateComment(comment.id)}>UPDATE</button>
                </div>
                )
            })}
        </>
    )

}

export default CommentPage