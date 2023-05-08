import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

//pages
import "./App.css";
import Home from "./layout/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import LiveTools from "./pages/LiveTools";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="about" element={<About />} />
      <Route path="process" element={<Process />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />

      <Route path="livetools" element={<LiveTools />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
