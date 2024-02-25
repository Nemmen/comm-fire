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
<<<<<<< HEAD
import Expert from "./components/Pages/Experts"
=======
// import Experts from "./components/Pages/Expert"
>>>>>>> e8e861e82c162ad927201b9f318542de412ce1a9
import UserDash from "./components/Pages/UserDash";
import ChatBot from "./components/ChatBot";
import Signin from "./components/community/Signin";
// import FitnessApp from "./components/Pages/Experts";
import Expert from "./components/Pages/Expert";

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
<<<<<<< HEAD
        path: "/Experts",
=======
        path: "/experts",
>>>>>>> e8e861e82c162ad927201b9f318542de412ce1a9
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
