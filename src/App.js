import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Error from "./Error";
import Community from "./components/community/Community";
import { Toaster } from 'react-hot-toast'
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";
import Home from "./components/Pages/Home"
import Ayurveda from "./components/Pages/Ayurveda"
import Expert from "./components/Pages/Expert"
import UserDash from "./components/Pages/UserDash";

const Layout = () => {
  return (
    <div className="">
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
     
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/ayurveda",
        element: <Ayurveda/>
      },
      {
        path: "/expert",
        element: <Expert/>
      },
      {
        path: "/profile/:id",
        element: <UserDash/>
      }
     
    ],
  },
]);

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
