import axios from "axios";
import { Suspense } from "react";
import { Await, defer, Link, useLoaderData, useNavigate } from "react-router-dom";


export const postsLoader = async () => {
  return defer({
    posts: getPosts()
  })
}

const getPosts = async () => {
  const res = await axios.get('https://62f4be75535c0c50e7615631.mockapi.io/post')
  return res.data;
}


const Posts = () => {

  const { posts } = useLoaderData(); 

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);


  return (
    <>
      <div>Posts</div>
        <div className="buttons">      
            <button onClick={goBack}>⮜</button>
            <button onClick={goForward}>⮞</button>
        </div>

        <Suspense fallback={<h2>Loading.....</h2>}>
          <Await resolve={posts}> 
            { 
              (resolvedPosts) => (<>
                { resolvedPosts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
                </Link>
                )
              )}
          </>)
          }
          </Await>
        </Suspense>

    </>
  );
};

export default Posts;
