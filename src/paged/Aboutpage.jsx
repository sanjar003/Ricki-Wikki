import { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=6`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  },[]);

  return (
    <div>
      <div>
        <h1>USERS АКНО</h1>
        <p>Сиз About Блокко кирдиниз</p>
      </div>
      {posts.map((post) => (
        <Link key={post.id} to={post.id}>
          <li>{post.name}</li>
          <li>{post.username}</li>
          <li>{post.id}</li>
        </Link>
      ))}
    </div>
  );
};
export { About };
