

import { createBrowserRouter} from "react-router-dom";
import App from "./../App"
import HomePage from "../pages/HomePage";
import BrandPage from "../pages/BrandPage";
import CategoryPage from "../pages/CategoryPage";
import StorePage from "../pages/StorePage";
import CategoryCouponPage from "../pages/CategoryCouponPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage.jsx"



const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',element:<HomePage />
            },
            {
                path: 'brand/:brandName',
                element: <BrandPage/>,
                loader: ({params}) => {
                    return params.brandName;
                }
            },
            {
                path:'category/',
                element: <CategoryPage/>,

                // loader:({params})=>{
                //     return params.categoryName;
                // }
            },

            {
                path: 'store/',
                element: <StorePage/>,

            },
            {
                path: 'categorycoupon/:categorycouponName',
                // path: 'categorycoupon/',
                element: <CategoryCouponPage/>,

            },
            {
                path: 'contactus/',
                element: <ContactUsPage/>,

            },
            {
                path: 'aboutus/',
                element: <AboutUsPage/>,

            },

        ]
    }
]);

export default router;