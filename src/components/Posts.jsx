// import React, { useState, useEffect } from "react";
// import Post from "./Post";

// const Posts = () => {
//   const [characters, setTodo] = useState([  ]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(" https://rickandmortyapi.com/api/character")
//       .then((response) => response.json())
//       .then((json) => setTodo(json))
//       .catch((error) => {
//         setError(error.message);
//         return error.message;
//       })
//       .finally(() => setIsLoading(false));
//   }, []);

//   if (error) {
//     return <div>Error:{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Posts</h1>
//         {isLoading ? (
//           <div>Loading...</div>
//             ) : (
//               characters.map((character) => {
//           return <Post  key={character.id}  {...character}/>;
//         })
//       )}
//     </div>
//   );
// };

// export default Posts;

// https://jsonplaceholder.typicode.com/posts
import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character ")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Containerr"  >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        characters.map((character) => (
          <Post key={character} {...character}/>
        ))
      )}
    </div>
  );
};

export default Posts;
