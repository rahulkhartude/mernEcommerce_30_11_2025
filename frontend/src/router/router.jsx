import { createBrowserRouter} from "react-router";
import App from "../App";
import Navbar from "../components/Navbar";
import Home from '../pages/home/Home';
// import Home from "../pages/home/Home";


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
  
  },
]);

export default router
