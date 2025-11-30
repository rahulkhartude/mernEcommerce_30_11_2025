import { createBrowserRouter} from "react-router";
import App from "../App";
import Navbar from "../components/Navbar";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<div>Home Page</div>
        }
    ]
  
  },
]);

export default router
