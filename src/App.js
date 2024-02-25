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
import Expert from "./components/Pages/Experts"
import UserDash from "./components/Pages/UserDash";
import ChatBot from "./components/ChatBot";
import Signin from "./components/community/Signin";

const Layout = () => {
  return (
    <div className="">
      <Navbar/>
      <Outlet></Outlet>
      <ChatBot/>
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
        path: "/Experts",
        element: <Expert/>
      },
      {
        path: "/profile/:id",
        element: <UserDash/>
      },{
        path : "/sigin",
        element : <Signin />
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
