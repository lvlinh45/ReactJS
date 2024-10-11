import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogPageDetail from "./components/BlogPageDetail";

const App = () => {
  return (
    <div>
      {/*  <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              recusandae magnam rerum? Aperiam a sunt impedit harum dolores
              libero, perspiciatis cupiditate, nemo eligendi ipsam ea beatae
              adipisci architecto excepturi sapiente!
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={<div>This is detail of movied id</div>}
        ></Route>
        <Route path="/movie" element={<div>this is a movie</div>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          {/* Muuốn 404 không có nav thì đưa ra ngoài route */}
          <Route path="*" element={<>This is 404 page</>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
