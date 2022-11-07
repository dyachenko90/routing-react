import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Post = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({}); 

    const goBack = () => navigate(-1);

    useEffect(()=> {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <>
            <button onClick={goBack}>⮜</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post