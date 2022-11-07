import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const Posts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  const axios = require('axios');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div>Posts</div>
        <div className="buttons">      
            <button onClick={goBack}>⮜</button>
            <button onClick={goForward}>⮞</button>
        </div>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
         <li>{post.title}</li>
        </Link>
      )
    )}
    </>
  );
};

export default Posts;
