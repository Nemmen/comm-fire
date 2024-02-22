import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Error from "./Error";
import Community from "./components/community/Community";
import { Toaster } from 'react-hot-toast'


const Layout = () => {
  return (
    <div className="">
      
      <Outlet></Outlet>
     
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
        path: "/",
        element: <Community />,
      },
     
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
