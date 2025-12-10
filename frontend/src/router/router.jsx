import { createBrowserRouter} from "react-router";
import App from "../App";
import Navbar from "../components/Navbar";
import Home from '../pages/home/Home';
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        { path:"/", element:<Home/>},
        { path:"/categories/:categoryName", element:<CategoryPage/>},
        {path:"/search",element:<Search/>}
    ]
  
  },
]);

export default router
