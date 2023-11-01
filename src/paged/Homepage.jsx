import { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1> COMENTS</h1>
      <p>Сиз COMENTS Блокко кирдиниз</p>
      {posts.map((post) => (
        <Link key={post.id} to={`comments/${post.id}`}>
          <li>{post.name}</li>
          <li>{post.email}</li>
          <li>{post.body}</li>
        </Link>
      ))}
    </div>
  );
};
export { Homepage };
