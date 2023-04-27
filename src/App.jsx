import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import "./App.css";
import Layout from "./layout/Layout";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import LiveTools from "./pages/LiveTools";
import About from "./pages/About";
import Process from "./pages/Process";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
  
      <Route path="about-us" element={<About />} />
      <Route path="process" element={<Process />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />

      <Route path="live-tools" element={<LiveTools />} />
      <Route path="blogs" element={<Blogs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
