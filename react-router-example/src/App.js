import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;
function Layout() {
  return (
    <div>
      <h1>Layout Website</h1>
      <Outlet />
    </div>
  );
}

// function Home() {
//   return <p>Welcome to my Home!</p>;
// }

// function About() {
//   return <p>This is the about page.</p>;
// }