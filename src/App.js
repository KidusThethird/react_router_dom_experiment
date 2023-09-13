import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//componrnts
import Nav from "./components/nav";
import Test from "./components/test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/server" element={<Test />}>
        <Route path="/server" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
