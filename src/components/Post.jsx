import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


export const postLoader = async ({ params }) => {
    const id = params.id;
    const res = await fetch(`https://62f4be75535c0c50e7615631.mockapi.io/post/${id}`)
    const post = await res.json();
    return { post, id };
}


const Post = () => {

    const {post, id} = useLoaderData();

    const navigate = useNavigate();

    const goBack = () => navigate(-1);


    const onDelete = async () => {
        await axios.delete(`https://62f4be75535c0c50e7615631.mockapi.io/post/${id}`);
        alert("You've deleted the post")
        navigate('/posts');
    } 


    return (
        <>
            <button onClick={goBack}>⮜</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button style={{background: 'red', color: 'black', cursor: 'pointer', minWidth: '100px', border: 'none'}} onClick={onDelete}>Delete</button>
            <Link 
            key={post.id} 
            to={`/posts/${post.id}/edit`}
            style={{background: 'yellow', color: 'black', cursor: 'pointer', minWidth: '100px', textAlign: 'center'}} 
            >Edit</Link>
        </>
        // )
        // }
        // </>
    )
}

export default Post