import React, { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const {post, id} = useLoaderData();

    const [changeTitle, setChangeTitle] = useState('');  
    const [changeBody, setChangeBody] = useState('');  

    const navigate = useNavigate();

    const goBack = () => navigate(-1);


    const savePost = async (id, title, body) => {
        const post = {
            id,
            title,
            body
        }
    await axios.put(`https://62f4be75535c0c50e7615631.mockapi.io/post/${id}`, post);
    setChangeTitle('');
    setChangeBody('');
    navigate('/posts')
}


  return (
        <>
            <button onClick={goBack}>⮜</button>
            <input defaultValue={post.title} onChange={e => setChangeTitle(e.target.value)}/>
            <textarea defaultValue={post.body} onChange={e => setChangeBody(e.target.value)}/>
            <button type="submit" onClick={() => savePost(id, changeTitle, changeBody)}>Save</button> 
        </>
    )
}

export default Edit