import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts Акно</h1>
      <div className="Posts">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};
export { Blogpage };
