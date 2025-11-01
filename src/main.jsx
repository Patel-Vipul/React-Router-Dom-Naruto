import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact, Github, User } from "./Components";
import { githubInfo } from "./Components/Github/Github";

//There are two ways to create router function

//1st way
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       },
//       {
//         path:"/github",
//         element: <Github/>
//       }
//     ]
//   }
// ])

//2nd way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubInfo} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
