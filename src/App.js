import { Routes, Route } from "react-router-dom";
import { Homepage } from "../src/paged/Homepage";
import { About } from "./paged/Aboutpage";
import { Blogpage } from "./paged/Blogpage";
import { Singlepage } from "./paged/Singlepage";
import { Notfountpage } from "./paged/Nodefountpage";
import "./App.css";

import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/coments" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="posts" element={<Singlepage />} />
          <Route path="*" element={<Notfountpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
