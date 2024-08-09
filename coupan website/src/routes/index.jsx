

import { createBrowserRouter} from "react-router-dom";
import App from "./../App"
import HomePage from "../pages/HomePage";
import BrandPage from "../pages/BrandPage";


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',element:<HomePage />
            },
            {
                path:'brand/:brandName',
                element:<BrandPage/>,
                loader:({params})=>{
                    return params.brandName;
                }
            }
        ]
    }
]);

export default router;